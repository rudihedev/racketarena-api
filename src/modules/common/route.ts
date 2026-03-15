import { Hono } from "hono";
import { products } from "../products/data";

export const commonRoute = new Hono();

commonRoute.get("/", (c) => {
  return c.json({
    title: "Racket Arena API",
    products: "/products",
  });
});
