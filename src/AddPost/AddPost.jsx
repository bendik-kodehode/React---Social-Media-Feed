import style from "./AddPost.module.css";

function AddPost() {
    return (
        <form>
            <div className={style.content}>
                <input type="text"></input>
                <textarea></textarea>
                <button>Post</button>
            </div>
        </form>
    )
}

export default AddPost;