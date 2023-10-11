import {useState} from "react"
import { useNavigate } from "react-router-dom";

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
        <div className="w-full max-w-xl flex mx-auto p-20 text-xl">
            <input
                type="text"
                className="w-full placeholder-gray-400 text-gray-900 p-4"
                placeholder="Search"
                onChange={search}
                value={query}
            />

			<button onClick={handleSubmit} className="bg-white p-4">🔍</button>
        </div>
    );
};


export default SearchBar;