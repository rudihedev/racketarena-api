import { Hono } from "hono";
import { logger } from "hono/logger";
import { OpenAPIHono } from "@hono/zod-openapi";

import { productRoute } from "./modules/products/route";
import { commonRoute } from "./modules/common/route";

const app = new OpenAPIHono();

app.use(logger());
app.route("/", commonRoute);
app.route("/products", productRoute);

// TODP: Use Scalar

console.log(process.env);

export default app;
