import style from "./Post.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import DeletePost from "../DeletePost/DeletePost";

function Post({post : {username, content, likes, timestamp}, index, selectedUser, setPosts}) {
    const cleanedTimestamp = timestamp
        .replace("T", " ")
        .replace("Z", "")
        .replace(/:\d{2}$/, "");

    return (
        <li className={style.card} key={index}>
            <div className={style.contentContainer}>
                <div className={style.titleContainer}>
                    <h2 className={style.title}>{username}</h2>
                    <DeletePost user={username} selectedUser={selectedUser} setPosts={setPosts} index={index}/>
                </div>
                <p className={style.paragraph}>{content}</p>
            </div>
            <div className={style.infoContainer}>
                <div className={style.likeContainer}>
                    <FontAwesomeIcon icon={faThumbsUp} className={style.faThumbsUp}/>
                    <p className={style.likes}>{likes}</p>
                </div>
                <p className={style.timestamp}>{cleanedTimestamp}</p>
            </div>
        </li>
    );
}

export default Post;
