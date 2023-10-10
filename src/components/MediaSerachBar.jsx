import {useState} from "react"
import { useNavigate } from "react-router-dom";


const SearchBar = () => {

    const [query, setQuery] = useState("")

	const navigate = useNavigate();

    function search(e){
        e.preventDefault()
        setQuery(e.target.value) 
    }

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