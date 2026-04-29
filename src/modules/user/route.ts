import { createRoute, OpenAPIHono } from "@hono/zod-openapi";

import { prisma } from "../../lib/prisma";
import { PublicUsersSchema } from "./schema";

export const userRoute = new OpenAPIHono();

userRoute.openapi(
  createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        content: { "application/json": { schema: PublicUsersSchema } },
        description: "Get all users",
      },
    },
  }),
  async (c) => {
    const users = await prisma.user.findMany({
      omit: {
        passwordId: true,
        email: true,
      },
    });
    console.log("Users data:", JSON.stringify(users, null, 2)); // ← cek ini
    return c.json(users);
  },
);
