import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import z from "zod";
import { prisma } from "../../lib/prisma";
import { checkAuthMiddleware } from "../auth/middleware";

export const cartRoute = new OpenAPIHono();

// Schema untuk response cart item (dengan data produk)
const CartItemResponseSchema = z.object({
  id: z.string(),
  quantity: z.number(),
  productId: z.string(),
  product: z.object({
    id: z.string(),
    name: z.string(),
    brand: z.string(),
    price: z.number(),
    imageUrl: z.string(),
    slug: z.string(),
  }),
});

const CartResponseSchema = z.array(CartItemResponseSchema);

// GET /cart — ambil semua item cart user yang login
cartRoute.openapi(
  createRoute({
    method: "get",
    path: "/",
    middleware: checkAuthMiddleware,
    responses: {
      200: {
        content: { "application/json": { schema: CartResponseSchema } },
        description: "Get cart items",
      },
    },
  }),
  async (c) => {
    const user = c.get("user");
    const cartItems = await prisma.cartItem.findMany({
      where: { userId: user.id },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            brand: true,
            price: true,
            imageUrl: true,
            slug: true,
          },
        },
      },
    });
    return c.json(cartItems, 200);
  },
);

// POST /cart — tambah item atau update quantity kalau sudah ada
cartRoute.openapi(
  createRoute({
    method: "post",
    path: "/",
    middleware: checkAuthMiddleware,
    request: {
      body: {
        content: {
          "application/json": {
            schema: z.object({
              productId: z.string(),
              quantity: z.number().int().positive(),
            }),
          },
        },
      },
    },
    responses: {
      200: {
        content: { "application/json": { schema: CartItemResponseSchema } },
        description: "Add or update cart item",
      },
    },
  }),
  async (c) => {
    const user = c.get("user");
    const { productId, quantity } = c.req.valid("json");

    const cartItem = await prisma.cartItem.upsert({
      where: { userId_productId: { userId: user.id, productId } },
      update: { quantity: { increment: quantity } },
      create: { userId: user.id, productId, quantity },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            brand: true,
            price: true,
            imageUrl: true,
            slug: true,
          },
        },
      },
    });

    return c.json(cartItem, 200);
  },
);

// PATCH /cart/:id — update quantity item tertentu
cartRoute.openapi(
  createRoute({
    method: "patch",
    path: "/{id}",
    middleware: checkAuthMiddleware,
    request: {
      params: z.object({ id: z.string() }),
      body: {
        content: {
          "application/json": {
            schema: z.object({ quantity: z.number().int().positive() }),
          },
        },
      },
    },
    responses: {
      200: {
        content: { "application/json": { schema: CartItemResponseSchema } },
        description: "Update cart item quantity",
      },
    },
  }),
  async (c) => {
    const user = c.get("user");
    const { id } = c.req.valid("param");
    const { quantity } = c.req.valid("json");

    const cartItem = await prisma.cartItem.update({
      where: { id, userId: user.id },
      data: { quantity },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            brand: true,
            price: true,
            imageUrl: true,
            slug: true,
          },
        },
      },
    });

    return c.json(cartItem, 200);
  },
);

// DELETE /cart/:id — hapus satu item dari cart
cartRoute.openapi(
  createRoute({
    method: "delete",
    path: "/{id}",
    middleware: checkAuthMiddleware,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        content: {
          "application/json": { schema: z.object({ message: z.string() }) },
        },
        description: "Delete cart item",
      },
    },
  }),
  async (c) => {
    const user = c.get("user");
    const { id } = c.req.valid("param");

    await prisma.cartItem.delete({ where: { id, userId: user.id } });

    return c.json({ message: "Cart item deleted" } as const, 200);
  },
);
