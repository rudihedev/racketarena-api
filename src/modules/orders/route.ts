import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import z from "zod";
import { prisma } from "../../lib/prisma";
import { checkAuthMiddleware } from "../auth/middleware";

export const orderRoute = new OpenAPIHono();

const OrderItemSchema = z.object({
  id: z.string(),
  productId: z.string(),
  productName: z.string(),
  productBrand: z.string(),
  imageUrl: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const OrderSchema = z.object({
  id: z.string(),
  totalAmount: z.number(),
  shippingCost: z.number(),
  paymentMethod: z.string(),
  status: z.string(),
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  city: z.string(),
  postalCode: z.string(),
  createdAt: z.string(),
  items: z.array(OrderItemSchema),
});

const PlaceOrderBodySchema = z.object({
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  city: z.string(),
  postalCode: z.string(),
  paymentMethod: z.string(),
});

// POST /orders — proses checkout
orderRoute.openapi(
  createRoute({
    method: "post",
    path: "/",
    middleware: checkAuthMiddleware,
    request: {
      body: {
        content: { "application/json": { schema: PlaceOrderBodySchema } },
      },
    },
    responses: {
      200: {
        content: { "application/json": { schema: OrderSchema } },
        description: "Order placed successfully",
      },
      400: {
        content: {
          "application/json": { schema: z.object({ message: z.string() }) },
        },
        description: "Order failed",
      },
    },
  }),
  async (c) => {
    const user = c.get("user");
    const body = c.req.valid("json");

    const cartItems = await prisma.cartItem.findMany({
      where: { userId: user.id },
      include: { product: true },
    });

    if (cartItems.length === 0) {
      return c.json({ message: "Cart is empty" }, 400);
    }

    for (const item of cartItems) {
      if (item.product.stockQuantity < item.quantity) {
        return c.json(
          {
            message: `Insufficient stock for ${item.product.name}. Available: ${item.product.stockQuantity}`,
          },
          400,
        );
      }
    }

    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );
    const shippingCost = 50000;
    const totalAmount = subtotal + shippingCost;

    // Buat order, kurangi stok, hapus cart dalam satu transaction
    const order = await prisma.$transaction(async (tx) => {
      // Buat order
      const newOrder = await tx.order.create({
        data: {
          userId: user.id,
          totalAmount,
          shippingCost,
          paymentMethod: body.paymentMethod,
          name: body.name,
          phone: body.phone,
          address: body.address,
          city: body.city,
          postalCode: body.postalCode,
          items: {
            create: cartItems.map((item) => ({
              productId: item.productId,
              productName: item.product.name,
              productBrand: item.product.brand,
              imageUrl: item.product.imageUrl,
              price: item.product.price,
              quantity: item.quantity,
            })),
          },
        },
        include: { items: true },
      });

      // Kurangi stok
      for (const item of cartItems) {
        await tx.product.update({
          where: { id: item.productId },
          data: { stockQuantity: { decrement: item.quantity } },
        });
      }

      // Hapus cart
      await tx.cartItem.deleteMany({ where: { userId: user.id } });

      return newOrder;
    });

    return c.json(
      {
        ...order,
        createdAt: order.createdAt.toISOString(),
      },
      200,
    );
  },
);

// GET /orders — riwayat order user
orderRoute.openapi(
  createRoute({
    method: "get",
    path: "/",
    middleware: checkAuthMiddleware,
    responses: {
      200: {
        content: { "application/json": { schema: z.array(OrderSchema) } },
        description: "Get order history",
      },
    },
  }),
  async (c) => {
    const user = c.get("user");

    const orders = await prisma.order.findMany({
      where: { userId: user.id },
      include: { items: true },
      orderBy: { createdAt: "desc" },
    });

    return c.json(
      orders.map((o) => ({ ...o, createdAt: o.createdAt.toISOString() })),
      200,
    );
  },
);
