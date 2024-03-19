import style from "./Post.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Post({post : {username, content, likes, timestamp}, index, selectedUser}) {
    const cleanedTimestamp = timestamp
        .replace("T", " ")
        .replace("Z", "")
        .replace(/:\d{2}$/, "");
        
    return (
        <li className={style.card} key={index}>
            <div className={style.contentContainer}>
                <div className={style.titleContainer}>
                    <h2 className={style.title}>{username}</h2>
                    <FontAwesomeIcon icon={faTrashAlt} className={style.faTrashAlt}/>                
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
