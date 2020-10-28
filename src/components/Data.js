import React, {useState, useEffect} from "react"
import axios from 'axios'
import { Link } from 'react-router-dom';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Data = (props) => {
    let [location, setLocation] = useState([]);
    // let [price, setPrice] = useState([]);
    console.log(REACT_APP_SERVER_URL)

    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/api/bigmacs/`)
        .then(response => {
            setLocation(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    // TO DO:
    // Graph for most expensive city
        // Find highest price
    // Graph for most least expensive city
        // Find lowest price
    // Create a temperature map for most expensive areas
        // Allow users to hover to show the data for that area. 
        // Give each area a name so that it can be connected.

    return(
        <div>
            <div className="bigMacPrices">

                <h3>Data</h3>
                <div id="navbarsExample07">
                    <ul className="navbar-nav ml-auto dataNavbar" >
                        {
                            <>
                                Sort By:
                                <li className="nav-item dataNavbar">
                                    <Link className="nav-link text-info" to="/about"> Most Expensive </Link>
                                </li>
                                
                                <li className="nav-item dataNavbar">
                                    <Link className="nav-link text-info" to="/about"> Least Expensive </Link>
                                </li>
                            </>
                        }   
                    </ul>
                </div>
                <div>{location.map((bigmac, index) => (
                    <p>
                        Location: {bigmac.location}
                            <br></br>
                        Price: {bigmac.price}
                    </p>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Data