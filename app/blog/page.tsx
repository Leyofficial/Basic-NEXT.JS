'use client'
import Link from "next/link";
import {getAllPosts} from "@/app/services/posts/getPosts";
import {CustomLoading} from "@/app/utility/CustomLoading/CustomLoading";
import {PostSearch} from "@/components/PostSearch/PostSearch";
import useSWR from "swr";


export default function BlogPage() {
    const {data : posts  , isLoading} = useSWR('lox' , getAllPosts)
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