import style from "./AddPost.module.css";
import defaultPosts from "../assets/posts";
import { useState } from "react";

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
        setPosts(prevPosts => [...prevPosts, newPost]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={style.content}>
                <input type="text" name="username" placeholder="Username" autoComplete="off" required></input>
                <textarea name="content" placeholder="What's on your mind?" autoComplete="off" required></textarea>
                <button type="submit">Post</button>
            </div>
        </form>
    )
}

export default AddPost;