import Link from "next/link";
import React from "react";
import {getAllPosts} from "@/services/posts/getPosts";

export const revalidate = 30

export default async function BlogPage(){
    const posts = await getAllPosts();
    return (
        <>
            <h1>Blog page</h1>
            {posts?.map((post : any) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </>
    )
};
