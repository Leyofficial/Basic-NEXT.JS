interface IPostForm {
 onSuccess : (arg : string | number) => void;
}
export function NewPostForm({onSuccess} : IPostForm) {
    async function createPost(data : FormData) {
        "use server"
        const {title , body} = Object.fromEntries(data);

        const response = await fetch('http://localhost:3001/posts' , {
            method : 'POST' ,
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({title , body , id : String(Date.now())})
        })
        const post = await response.json();
        await onSuccess(post.id)
    }

    return (
        <form className="form" action={createPost}>
            <input type={"text"} placeholder={"title"} required name={"title"}/>
            <textarea placeholder={"content"} required name="body"/>
            <div>
                <input type="submit" value={"Add post"}/>
            </div>
        </ form>
    )
}