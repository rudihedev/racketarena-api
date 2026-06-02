import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import z from "zod";

import { prisma } from "../../lib/prisma";
import { ProductsSchema, ProductSchema } from "./schema";

export const productRoute = new OpenAPIHono();

productRoute.openapi(
  createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        content: { "application/json": { schema: ProductsSchema } },
        description: "List of all products",
      },
    },
  }),
  async (c) => {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "asc" },
    });
    return c.json(products);
  },
);

productRoute.openapi(
  createRoute({
    method: "get",
    path: "/{slug}",
    request: {
      params: z.object({ slug: z.string() }),
    },
    responses: {
      200: {
        content: { "application/json": { schema: ProductSchema } },
        description: "Product detail by slug",
      },
      404: {
        content: {
          "application/json": {
            schema: z.object({ message: z.string() }),
          },
        },
        description: "Product not found",
      },
    },
  }),
  async (c) => {
    const { slug } = c.req.valid("param");

    const product = await prisma.product.findUnique({ where: { slug } });

    if (!product) {
      return c.json({ message: "Product not found" } as const, 404);
    }

    return c.json(product, 200);
  },
);
