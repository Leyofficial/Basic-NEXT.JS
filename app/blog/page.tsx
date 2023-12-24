'use client'
import Link from "next/link";
import {getAllPosts} from "@/services/posts/getPosts";
import {CustomLoading} from "@/utility/CustomLoading/CustomLoading";
import {PostSearch} from "@/components/PostSearch/PostSearch";
// import useSWR from "swr";
import {useEffect, useState} from "react";


export default function BlogPage() {
    const [posts , setPosts] = useState<any[]>([])
    const [isLoading , setLoading] = useState<boolean>(true)
    useEffect(() => {
         getAllPosts().then((response) => {
            setPosts(response)
        }).finally(() => setLoading(false));

    },[])
    return (
        <>
            <h1>Blog page</h1>
            <PostSearch callback={setPosts}/>
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