import {NextResponse} from "next/server";
import {getAllPosts} from "@/services/posts/getPosts";

export async function GET(req  : Request) {
    const posts = await getAllPosts()
    const { searchParams } = new URL(req.url);

    const query = searchParams.get('q');

    let currentPosts = posts;

    if (query){
        currentPosts = posts.filter((post : any) => post.title.toLowerCase().includes(query.toLowerCase()))
    }

    return NextResponse.json( currentPosts )
}
export async function POST(req : Request) {
    const body = await req.json();
    return NextResponse.json(body)
}
