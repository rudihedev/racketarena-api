import { Hono } from "hono";

export const commonRoute = new Hono();

commonRoute.get("/", (c) => {
  return c.json({
    title: "Racket Arena API",
    product: "/products",
  });
});
