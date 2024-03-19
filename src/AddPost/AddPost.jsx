import style from "./AddPost.module.css";

function AddPost({setPosts}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newPost = {
            username: formData.get("username"),
            content: formData.get("content"),
            timestamp: new Date().toISOString().replace(/\.\d{3}Z$/, "Z"), // Removes milliseconds.
            likes: 1
        };
        setPosts(prevPosts => [newPost, ...prevPosts]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" autoComplete="off" required></input>
            <textarea name="content" placeholder="What's on your mind?" autoComplete="off" required></textarea>
            <button type="submit">Post</button>
        </form>
    )
}

export default AddPost;