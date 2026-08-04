import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAdminRoute =
        nextUrl.pathname.startsWith("/meetings/new") ||
        (nextUrl.pathname.startsWith("/meetings") &&
          nextUrl.pathname.includes("edit"));

      if (isAdminRoute) {
        return isLoggedIn;
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
