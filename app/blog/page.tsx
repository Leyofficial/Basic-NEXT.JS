'use client'
import Link from "next/link";
import {useEffect, useState} from "react";
import {getAllPosts} from "@/app/services/posts/getPosts";
import {CustomLoading} from "@/app/utility/CustomLoading/CustomLoading";
import {PostSearch} from "@/components/PostSearch/PostSearch";
import useSWR from "swr";
import {ILink} from "@/components/Header/HeaderNavigation/HeaderNavigation";


// async function getData() {
//     const response = await fetch('http://jsonplaceholder.typicode.com/posts' , {
//         next : {
//             revalidate : 60
//         }
//     });
//     return response.json();
// }

export default function BlogPage() {
    const {data : posts  , isLoading} = useSWR('posts' , getAllPosts)
    return (
        <>
            <h1>Blog page</h1>
            <PostSearch/>
            {isLoading ? <CustomLoading/> : posts?.map((post : any) => {
                return (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                )
            })}
        </>

    )
}