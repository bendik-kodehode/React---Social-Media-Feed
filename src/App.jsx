import Feed from "./Feed/Feed";
import AddPost from "./AddPost/AddPost";
import defaultPosts from "./assets/posts";
import { useState } from "react";
import Navbar from "./Navbar/Navbar";

function App() {
    const [posts, setPosts] = useState(defaultPosts);
    const users = posts.map(post => post.username);

    return (
    <>
    <header>
        <Navbar users={users}/>
    </header>
    <main>
        <AddPost setPosts={setPosts}/>
        <Feed arr={posts}/>
    </main>
    </>
    )
}


export default App;
