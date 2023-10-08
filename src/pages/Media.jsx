import { useParams } from "react-router-dom"

export default function Media(){
    const {query} = useParams();

     // Fetch data using the `query`  required parameter, appending ".json" as needed 
    const apiUrl = `/api/search/${query}.json`;
    
    // Perform your API fetch using `apiUrl`

    return (
        <div>
            <h1>Media Search </h1>

        </div>
     )



}
