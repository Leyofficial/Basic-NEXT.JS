interface IPostForm {
 onSuccess : (arg: any) => void;
}
export function NewPostForm({onSuccess} : IPostForm) {
    return (
        <form className="form" action={onSuccess}>
            <input type={"text"} placeholder={"title"} required name={"title"}/>
            <textarea placeholder={"content"} required name="body"/>
            <div>
                <input type="submit" value={"Add post"}/>
            </div>
        </ form>
    )
}