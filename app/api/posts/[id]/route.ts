import {NextResponse} from 'next/server';
import {posts} from "@/app/api/posts/posts";
import {headers} from "next/headers";

export async function DELETE(request: Request, {params}: {
    params: {
        id: string
    }
}) {
    const id = params.id;

    const headerList = headers();
    const isAuth = headerList.get('isAuth');

    let deletedPost;
    let currentPost = posts.find((post, index) => {
        if (id && post.id === id) {
            posts.splice(index, 1);
            deletedPost = post;
            return true;
        }
        return false;
    });
    if (currentPost && isAuth) {
        return NextResponse.json({
            message : "Post successfully deleted!",
            status : 200,
            deletedPost : deletedPost,
            _id : String(Date.now()),

        });
    } else {
        return NextResponse.json({
            message : 'User is not logged in to the account',
            status : 500
        })
    }
}


export async function GET(request: Request, {params}: { params: { id: string } }) {
    const id = params.id;
    const post = posts.find((post) => post.id === id);

    if (post) {
        return NextResponse.json(post);
    } else {
        return NextResponse.json({
            message : 'This post haven`t found',
            status : 500
        })
    }
}