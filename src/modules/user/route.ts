import { createRoute, OpenAPIHono } from "@hono/zod-openapi";

import { prisma } from "../../lib/prisma";
import { UserSchema } from "./schema";

export const userRoute = new OpenAPIHono();

userRoute.openapi(
  createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        content: { "application/json": { schema: UserSchema } },
        description: "Get all users",
      },
    },
  }),
  async (c) => {
    const user = await prisma.user.findMany();
    return c.json(user);
  },
);
