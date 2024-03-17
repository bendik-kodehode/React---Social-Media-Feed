import style from "./Post.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

function Post({post, index}) {
    const {username, content, likes, timestamp} = post;
    return (
        <li className={style.card} key={index}>
            <div className={style.contentContainer}>
                <h2 className={style.title}>{username}</h2>
                <p className={style.paragraph}>{content}</p>
            </div>
            <div className={style.infoContainer}>
                <div className={style.likeContainer}>
                    <FontAwesomeIcon icon={faThumbsUp} className={style.faThumbsUp}/>
                    <p className={style.likes}>{likes}</p>
                </div>
                <p className={style.timestamp}>{timestamp}</p>
            </div>
        </li>
    );
}

export default Post;