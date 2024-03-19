import Feed from "./Feed/Feed";
import AddPost from "./AddPost/AddPost";
import defaultPosts from "./assets/posts";
import { useState } from "react";
import Navbar from "./Navbar/Navbar";

function App() {
    const [posts, setPosts] = useState(defaultPosts);
    const users = (defaultPosts.map(post => post.username));
    const [selectedUser, setSelectedUser] = useState("");

    const handleUserSelect = user => setSelectedUser(user);

    console.log(posts);

    return (
    <>
    <header>
        <Navbar users={users} handleUserSelect={handleUserSelect}/>
    </header>
    <main>
        <AddPost setPosts={setPosts} selectedUser={selectedUser}/>
        <Feed posts={posts} selectedUser={selectedUser} setPosts={setPosts}/>
    </main>
    </>
    )
}


export default App;
