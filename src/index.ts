import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";

import { productRoute } from "./modules/products/route";
import { commonRoute } from "./modules/common/route";

const app = new OpenAPIHono();

app.use(cors());
app.use(logger());

app.route("/", commonRoute);
app.route("/products", productRoute);

// The OpenAPI documentation will be available at /doc
app.doc("/openapi.json", {
  openapi: "3.0.0",
  info: {
    title: "Racket Arena API",
    version: "1.0.0",
  },
});

app.get("/", Scalar({ url: "/openapi.json" }));

// console.log(process.env);

export default app;
