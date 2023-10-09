// provides data from the API, this file will not render anything 

import { createContext, useState } from "react";

export const ApiContext =  createContext (null);

export default function ApiProvider({children}){

    // eslint-disable-next-line no-template-curly-in-string
    const [apiUrl, setApiUrl] = useState("https://imdb-movies-web-series-etc-search.p.rapidapi.com/"); 
    
    return (
        <ApiContext.Provider value ={
            {
                api: apiUrl, 
                setApi: setApiUrl
            }
        }>
            {children}
        </ApiContext.Provider>
    
    );


}


