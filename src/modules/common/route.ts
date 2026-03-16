import { Hono } from "hono";

export const commonRoute = new Hono();

commonRoute.get("/hello", (c) => {
  return c.json({
    title: "Racket Arena API",
    products: "/products",
  });
});
