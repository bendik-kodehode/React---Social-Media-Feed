import posts from "../assets/posts";
import Post from "../Post/Post";
import style from "./Feed.module.css"

function Feed() {
    return (
        <ul className={style.list}>
            {posts.map((post, index) => <Post post={post} key={index}/>
            )}
        </ul>
        )
}

export default Feed;