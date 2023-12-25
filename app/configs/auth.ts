import type { AuthOptions, User } from 'next-auth'
import GoggleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'


const users = [
    {
        id: 1,
        name: "Danyil",
        message : 'How are you ?',
        email: "dan@gmail.com",
        password: "0511",
    },
];

export const authConfig: AuthOptions = {
    providers: [
        GoggleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        Credentials({
            credentials: {
                email: { label: 'email', type: 'email', required: true },
                password: { label: 'password', type: 'password', required: true },
            },
            authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null;

                const currentUser = users.find(user => user.email === credentials.email)

                if (currentUser && currentUser.password === credentials.password) {
                    const { password, ...userWithoutPass } = currentUser;
                    return userWithoutPass as unknown as  User;
                }

                return null
            }
        })
    ],
    // pages : {
    //     signIn : '/signin'
    // }
}
