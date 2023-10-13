import {useState} from "react"
import { useNavigate } from "react-router-dom";
import styles from '../pages/styles.css'

// media search bar  function 
const SearchBar = () => {

// using hooks navigate to create the search bar 
    const [query, setQuery] = useState("")

	const navigate = useNavigate();

    function search(e){
        e.preventDefault()
        setQuery(e.target.value) 
    }

//  help to link and title search from the url to the search bar 
	const handleSubmit = (event) => {
		console.log(query);
		navigate ('/' + query);

	}

	return (
        <div className={`${styles["centered-container"]} ${styles[ "search-bar"]}`}>
            <input
                type="text"
                className={styles["search-input"]}
                placeholder="Search  "
                onChange={search}
                value={query}
            />

			<button onClick={handleSubmit} className={styles["search-button"]}>
            🔍
            </button>
        </div>
    );
};


export default SearchBar;