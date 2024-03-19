import style from "./Navbar.module.css";

function Navbar({users, handleUserSelect}) {

    const handleUserChange = (e) => {
        handleUserSelect(e.target.value);
    } 

    return (
        <nav>
            <label htmlFor="users">Select User:</label>
            <select id="users" onChange={handleUserChange}>
                <option value="">-</option>
                {users.map((user, index) => <option value={user} key={index}>{user}</option>)}
            </select>
        </nav>
    )
}

export default Navbar;
