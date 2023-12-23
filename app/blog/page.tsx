
import Link from "next/link";

interface IPosts {
    id : string,
    title : string
}

async function getData() {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts' , {
        next : {
            revalidate : 60
        }
    });
    return response.json();
}

export default async function BlogPage() {
    const posts = await getData();
    return (
        <>
            <h1>Blog page</h1>
            {posts?.map((post : any) => {
                return (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                )
            })}
        </>

    )
}