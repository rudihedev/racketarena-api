import { OpenAPIHono } from "@hono/zod-openapi";
import { prisma } from "../../lib/prisma";

export const productRoute = new OpenAPIHono();

// TODO: Use OpenAPI

// GET list of all products
productRoute.get("/", async (c) => {
  const products = await prisma.product.findMany();
  return c.json(products);
});

// GET a racket by slug
productRoute.get("/:slug", async (c) => {
  const slug = c.req.param("slug");

  const product = await prisma.product.findUnique({
    where: { slug },
  });

  return c.json({ product });
});
