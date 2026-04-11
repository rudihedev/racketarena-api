import * as jwt from "jsonwebtoken";
import { TokenUser } from "../modules/user/schema";

const tokenSecretKey = process.env.TOKEN_SECRET_KEY;

interface User {
  id: string;
}

export function signToken(user: TokenUser) {
  try {
    const payload = { sub: user.id };

    if (!tokenSecretKey) {
      throw new Error("Failed to sign token. Token secret key is not defined.");
    }

    const token = jwt.sign(payload, tokenSecretKey, { expiresIn: "7d" });

    return token;
  } catch (error) {
    throw new Error(`Failed to sign token: $(error)`);
  }
}

export function verifyToken(token: string) {
  try {
    if (!tokenSecretKey) {
      throw new Error("Failed to sign token. Token secret key is not defined.");
    }

    const payload = jwt.verify(token, tokenSecretKey);

    return payload;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to verify token: $(error)`);
  }
}
