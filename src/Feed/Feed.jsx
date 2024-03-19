
import Post from "../Post/Post";
import style from "./Feed.module.css"

function Feed({posts, selectedUser, setPosts}) {
    return (
        <ul className={style.list}>
            {posts.map((post, index) => <Post post={post} key={index} selectedUser={selectedUser} setPosts={setPosts}/>
            )}
        </ul>
        )
}

export default Feed;
