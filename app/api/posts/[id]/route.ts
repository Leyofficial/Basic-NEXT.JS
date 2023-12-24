import { NextResponse } from 'next/server';
import {posts} from "@/app/api/posts/posts";

export  async function DELETE(request : Request, { params } : {params : {
    id : string
    }}) {
    console.log(request)
    const id = params.id;

    let currentPosts = posts;
    if (id) {
        currentPosts = posts.filter((post) => +post.id === +id)
    }

    return NextResponse.json(currentPosts);
}
