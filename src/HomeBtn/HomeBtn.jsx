import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import style from "./HomeBtn.module.css";

function HomeBtn() {
    const handleHome = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <FontAwesomeIcon icon={faHome} className={style.faHome} onClick={handleHome} />
    )
}

export default HomeBtn;