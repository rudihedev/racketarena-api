import { createRoute, OpenAPIHono } from "@hono/zod-openapi";

import { dataProducts } from "./data";
import { prisma } from "../../lib/prisma";
import { ProductsSchema } from "./schema";

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
    const products = await prisma.product.findMany();
    return c.json(products);
  },
);

// GET list of all products
// productRoute.get("/", async (c) => {
//   const products = await prisma.product.findMany();
//   return c.json(products);
// });

// // GET a racket by slug
// productRoute.get("/:slug", async (c) => {
//   const slug = c.req.param("slug");

//   const product = await prisma.product.findUnique({
//     where: { slug },
//   });

//   return c.json({ product });
// });
