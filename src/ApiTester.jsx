import {useContext} from "react";
import ApiContext from "./contexts/ApiContext";

export default function ApiTester(){ 

    let connectionData = useContext(ApiContext);

    return (
        <div>
            <h1> API URL {connectionData.url}</h1>
        </div>
    )

}