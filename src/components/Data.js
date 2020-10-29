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
                                <p className="dataNavbar">Sort By:</p>
                                <li className="nav-item dataNavbar">
                                    <button className="nav-link text-info dataBtn" onClick={(e) => handleMost(e)}> Most Expensive </button>
                                </li>

                                <li className="nav-item dataNavbar">
                                    <button className="nav-link text-info dataBtn" onClick={(e) => handleLeast(e)}> Least Expensive </button>
                                </li>
                                <br></br>
                                <p className="dataNavbar">Search:</p>
                                <input className="dataNavbar"></input>
                            </>
                        }   
                    </ul>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Big Mac Meal Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {location.map((bigmac, index) => (
                        <tr>
                            <td>#</td>
                            <td>City: {bigmac.location.split(',')[0]}</td>
                            <td>State: {bigmac.location.split(',')[1]}</td>
                            <td>Price: ${bigmac.price}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Data