import style from "./Navbar.module.css";

function Navbar({users}) {

    return (
        <nav>
            <label for="users">Select User:</label>
            <select id="users">
                <option value="">-</option>
                {users.map((user, index) => <option value={user} key={index}>{user}</option>)}
            </select>
        </nav>
    )
}

export default Navbar;