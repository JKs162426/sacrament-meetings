import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsed = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsed.success) return null;

        const { email, password } = parsed.data;

        // Hardcoded admin user for bishopric access
        if (email !== process.env.ADMIN_EMAIL) return null;

        const passwordsMatch = await bcrypt.compare(
          password,
          process.env.ADMIN_PASSWORD_HASH!
        );

        if (passwordsMatch) return { email };
        return null;
      },
    }),
  ],
});
