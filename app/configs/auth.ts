import {NextAuthOptions , User} from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import Credentials from "next-auth/providers/credentials";

const users = [
    {
    id : 1,
    name : 'Danyil',
    email : 'dan@gmail.com',
    password:  '0511'
    },

]

// @ts-ignore
export const authConfig : NextAuthOptions = {
    providers : [
        Credentials({
            name: "",
            id: "",
            type: "credentials",
            credentials : {
                email : {type : 'email' , required : true , label : 'email'},
                password : {type : 'password' , required : true , label : 'password'},
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null

                const currentUser = users.find((user => user.email === credentials.email))

                if (currentUser && currentUser.password === credentials.password){
                    const {password , ...userWithoutPass }  = currentUser
                    return userWithoutPass as unknown as User
                }
                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret : process.env.GOOGLE_SECRET!,
        }),

    ]
}