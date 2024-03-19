import Feed from "./Feed/Feed";
import AddPost from "./AddPost/AddPost";
import defaultPosts from "./assets/posts";
import { useState } from "react";

function App() {
    const [posts, setPosts] = useState(defaultPosts);

    return (
    <>
        <AddPost setPosts={setPosts}/>
        <Feed arr={posts}/>
    </>
    )
}


export default App;
