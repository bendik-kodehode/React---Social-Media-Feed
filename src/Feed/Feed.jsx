
import Post from "../Post/Post";
import style from "./Feed.module.css"

function Feed({arr}) {
    return (
        <ul className={style.list}>
            {arr.map((post, index) => <Post post={post} key={index}/>
            )}
        </ul>
        )
}

export default Feed;
