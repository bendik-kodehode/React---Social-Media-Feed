
import Post from "../Post/Post";
import style from "./Feed.module.css"

function Feed({posts, selectedUser}) {
    return (
        <ul className={style.list}>
            {posts.map((post, index) => <Post post={post} key={index} selectedUser={selectedUser}/>
            )}
        </ul>
        )
}

export default Feed;
