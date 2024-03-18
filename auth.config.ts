import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/logged');
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false;
            } else if(isLoggedIn) {
                return Response.redirect(new URL('/logged', nextUrl));
            }
            return true;
        },
    },
    providers: [],
} satisfies NextAuthConfig;
