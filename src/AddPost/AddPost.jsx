import style from "./AddPost.module.css";

function AddPost({setPosts, selectedUser}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newPost = {
            username: selectedUser,
            content: formData.get("content"),
            timestamp: new Date().toISOString().replace(/\.\d{3}Z$/, "Z"), // Removes milliseconds.
            likes: 1
        };
        setPosts(prevPosts => [newPost, ...prevPosts]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea name="content" placeholder="What's on your mind?" autoComplete="off" required></textarea>
            <div className={style.btnContainer}>
                <button type="submit">Post</button>
            </div>
        </form>
    )
}

export default AddPost;
