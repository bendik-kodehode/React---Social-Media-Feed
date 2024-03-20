import style from "./DeletePost.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function DeletePost({user, selectedUser, setPosts, index}) {

    const handlePostDelete = () => {
        setPosts(p => p.filter((_, i) => i !== index))
    }

    console.log("index: ", index);

    if (user === selectedUser) {
        return <FontAwesomeIcon icon={faTrashAlt} className={style.faTrashAlt} onClick={handlePostDelete}/> 
    } else {
        return null;
    }
}

export default DeletePost;