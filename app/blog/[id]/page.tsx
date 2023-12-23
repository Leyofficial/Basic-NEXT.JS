

type IProps = {
    params : {
        id : string
    }
}

async function getData(id : string) {
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}` , {
        next : {
            revalidate : 60
        }
    });
    return response.json()
}

export default async function BlogItem({params : { id } } : IProps){
    const data = await getData(id);
    return (
        <>
        <h1>{data.title}</h1>
            <p>{data.body}</p>
        </>
    )
 }