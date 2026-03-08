import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { OpenAPIHono } from "@hono/zod-openapi";

import { productRoute } from "./modules/products/route";
import { commonRoute } from "./modules/common/route";

const app = new OpenAPIHono();

app.use(logger());
app.use(cors());

app.route("/", commonRoute);
app.route("/products", productRoute);

export default app;
