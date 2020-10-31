import React, {useState, useEffect} from "react"
import axios from 'axios'
import {Table, Form, Button} from 'react-bootstrap'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Data = (props) => {
    let [main, setMain] = useState([]);
    let [location, setLocation] = useState('');
    // let [price, setPrice] = useState([]);

    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/api/bigmacs/`)
        .then(response => {
            setMain(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    let handleMost = () => {
        axios.get(`${REACT_APP_SERVER_URL}/api/bigmacs/most`)
        .then(response => {
            setMain(response.data)
        })
        .catch(err => console.log(err))
    }
    let handleLeast = () => {
        axios.get(`${REACT_APP_SERVER_URL}/api/bigmacs/least`)
        .then(response => {
            setMain(response.data)
        })
        .catch(err => console.log(err))
    }

    let handleLocation = (e) => {
        setLocation(e.target.value)
    }

    let handleMain = (e) => {
        e.preventDefault()
        axios.get(`${REACT_APP_SERVER_URL}/api/bigmacs/${location}`)
        .then(response => {
            setMain(response.data)
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
                                <Form onSubmit={(e) => handleMain(e)}>
                                    <input className="dataNavbar" name="location" type="text" value={location} onInput={handleLocation}/>
                                    <Button className="btn-info" type="submit">SEARCH</Button>
                                </Form>    
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
                    {main.map((bigmac, index) => (
                        <tr key={index}>
                            <td>#</td>
                            <td> {bigmac.location.split(',')[0]} </td>
                            <td> {bigmac.location.split(',')[1]} </td>
                            <td> ${bigmac.price} </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Data