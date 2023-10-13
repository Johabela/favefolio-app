import { NavLink} from "react-router-dom";


export default function Navbar(props){

    const centerText ={
        textAlign :"center", 
        marginTop: "50px",
    };

    return (
        <nav> 
            <h3 style={centerText}> FaveFolio </h3>
            <ul style={{listStyleType: 'none', Padding: 0 }}> 
                <li>
                    <NavLink to = "/" style={({isActive}) => isActive ? {color:"black"}: undefined} > 
                        Home
                    </NavLink>
                </li>
                <li> 
                    <NavLink  to="/:titleName" style={({isActive}) => isActive ? {color:"black"}: undefined} >
                    Media Search 
                    </NavLink>
                </li>

                <li> 
                    <NavLink to="/restaurants" style={({isActive}) => isActive ? {color:"black"}: undefined} > 
                    Restaurants
                    </NavLink>
                </li>
                <li> 
                    <NavLink to="/books" style={({isActive}) => isActive ? {color:"black"}: undefined} > 
                    Books
                    </NavLink>
                </li>
            </ul>
        </nav>
    )




}