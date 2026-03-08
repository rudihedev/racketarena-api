import { Hono } from "hono";
import { prisma } from "../../lib/prisma";

export const productRoute = new Hono();

// GET list of all rackets
productRoute.get("/", async (c) => {
  const products = await prisma.product.findMany();
  return c.json(products);
});

// GET a racket by slug
productRoute.get("/:slug", async (c) => {
  const slug = c.req.param("slug");

  const racket = await prisma.product.findUnique({
    where: { slug },
  });

  return c.json({ racket });
});

// ADD new racket data
productRoute.post("/", async (c) => {
  return c.json({}, 201);
});

//--- PATCH - Partial update racket by slug
productRoute.patch("/:id", async (c) => {
  const id = Number(c.req.param("id"));

  return c.json({}, 200);
});

//--- DELETE a racket by slug
productRoute.delete("/:id", (c) => {
  const id = Number(c.req.param("id"));

  return c.json({ message: "Racket deleted successfully!" }, 200);
});

//--- DELETE ALL
productRoute.delete("/", (c) => {
  return c.json({ message: "All rackets deleted successfully!" }, 200);
});
