import { createFactory } from "hono/factory";
import z from "zod";
import { UserSchema } from "../user/schema";
import { verifyToken } from "../../lib/token";
import { prisma } from "../../lib/prisma";

export const AuthMiddlewareEnvSchema = z.oobject({
  Variables: z.object({
    user: UserSchema,
  }),
});

const factory = createFactory<AuthMiddlewareEnv>();

export const checkAuthMiddleware = factory.createMiddleware(async (c, next) => {
  try {
    const authHeader = c.req.header("Authorization");
    if (!authHeader) {
      return c.json({ message: "Authorization header is required" }, 401);
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return c.json({ message: "Token is required" }, 401);
    }

    const payload = verifyToken(token);
    if (!payload) {
      return c.json({ message: "Invalid token" }, 401);
    }

    const userId = payload.sub;

    if (!payload.sub || typeof payload.sub != "string") {
      return c.json({ message: "User ID is invalid" }, 401);
    }

    const user = await db.user.findUnique({
      where: { id: payload.sub },
    });
    if (!user) {
      return c.json({ message: "User is no longer available" }, 401);
    }

    c.set("user", user);

    await next();
  } catch (error) {
    console.error("Authentication error:", error);
    return c.json({ message: "Failed to check authorized user!" }, 401);
  }
});
