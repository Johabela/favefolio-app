import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { ApiContext} from "../contexts/ApiContext";
import MediaCard from "../components/MediaCard";
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SearchBar from '../components/MediaSearchBar' 


export default function Media(){

    // search results -----------------------useState needs to have an array even there is not results to show 
    const [searchResults, setSearchResults] = useState ([]);

    // api URL -> const  destructed the api from the ApiContext
    const {api} = useContext (ApiContext);

    // // route param for the title of movie or tv show "query"
    const {titleName} = useParams ();

    // api key 
    const apiKey = process.env.REACT_APP_API_KEY;
  
    useEffect(() => {

        async function apiRequest(){

            // URLSearchParams is an object 
            let queryParams = new URLSearchParams({
                //------------------------handling urls with .json suffix*/}
                q: 'search' + titleName + `.json`
            })

            // Fetch data using the `query`  required parameter, appending ".json" as needed 
            let response = await fetch (api + queryParams,{
                headers: {
                    'X-RapidAPI-Key' : apiKey 
                }
            });

            // get a response from the fetch request the data is converted to json to be able to work with the data 
            let responseData = await response.json();   
            
            // setting the state with the function SearchResults - > once it exits it can be rendered 
            setSearchResults(responseData.d);

        }

        // needs to call the async function apiRequest to render data 
         apiRequest();

    }, [titleName]);

    return (
        <div>
            <h1>Media</h1>
            <h2>Movie and Tv Show Search </h2>

            <SearchBar /> 
            {/* once the page load the data is saved to the state */}
            {searchResults.length > 0 && 
            <div>
                {/* <h1> {searchResults[0].l} - {searchResults[0].qid}</h1>  */}

                {/* container here with roes and columns 
                put the card in columns - responsively */}
                <Container fluid >
                    <Row style={{display: 'flex', flexWrap:'wrap'}}>
                        {/* //renders the title of the movie or tv show of the search results */}
                        {searchResults.map(result => {
                            // the key prop needs to be assign to all the elements of the component 
                            return <Col key={result.id} xs={12} sm={6} md={4} lg={3}> 
                                <MediaCard 
                                    cardTitle={result.l} 
                                    imageUrl={result.i ? result.i.imageUrl : ''}  // -> this checks if "i" exists 
                                    cardRank= {result.rank} 
                                    typeMedia= {result.quid}
                                /> 
                              </Col>                      
                         }
                         )}
                        
                     </Row>
                 </Container>

                
            </div>
            }
        </div>
     )

}
