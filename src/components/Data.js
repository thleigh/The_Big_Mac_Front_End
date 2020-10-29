import React, {useState, useEffect} from "react"
import axios from 'axios'
import {Table} from 'react-bootstrap'

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

    let handleMost = (id,e) => {
        axios.get(`${REACT_APP_SERVER_URL}/api/bigmacs/most`)
        .then(response => {
            setLocation(response.data)
        })
        .catch(err => console.log(err))
    }
    let handleLeast = (id,e) => {
        axios.get(`${REACT_APP_SERVER_URL}/api/bigmacs/least`)
        .then(response => {
            setLocation(response.data)
        })
        .catch(err => console.log(err))
    }

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
                                    <button className="nav-link text-info dataBtn" onClick={(e) => handleMost(e)}> Most Expensive </button>
                                </li>

                                <li className="nav-item dataNavbar">
                                    <button className="nav-link text-info dataBtn" onClick={(e) => handleLeast(e)}> Least Expensive </button>
                                </li>
                            </>
                        }   
                    </ul>
                </div>
                <div>{location.map((bigmac, index) => (
                    <p className="dataBox">
                        City: {bigmac.location.split(',')[0]}
                            <br></br>
                        State: {bigmac.location.split(',')[1]}
                            <br></br>
                        Price: ${bigmac.price}
                    </p>
                ))}
                </div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Big Mac Meal Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Data