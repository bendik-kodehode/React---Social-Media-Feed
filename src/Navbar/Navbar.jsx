import style from "./Navbar.module.css";
import HomeBtn from "../HomeBtn/HomeBtn";

function Navbar({users, handleUserSelect}) {

    const handleUserChange = (e) => {
        handleUserSelect(e.target.value);
    } 

    return (
        <nav>
            <HomeBtn/>
            <div className={style.userContainer}>
                <label htmlFor="users">Select User:</label>
                <select id="users" onChange={handleUserChange}>
                    <option value="">-</option>
                    {users.map((user, index) => <option value={user} key={index}>{user}</option>)}
                </select>
            </div>
        </nav>
    )
}

export default Navbar;
