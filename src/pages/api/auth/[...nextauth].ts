import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
    ],

    callbacks: {
        async signIn(user, account, profile) {
            return true
        },
        async redirect(url, baseUrl) {
            return baseUrl
        },
        async session(session, user) {
            return session
        },
        async jwt(token, user, account, profile, isNewUser) {
            return token
        }
    }
})