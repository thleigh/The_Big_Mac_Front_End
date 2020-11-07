import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Form, Button } from 'react-bootstrap'
import Map from './Map.js'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Data = (props) => {
    let [main, setMain] = useState([]);
    let [location, setLocation] = useState('');
    let [sort, setSort] = React.useState(false);

    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/api/bigmacs/`)
        .then(response => {
            setMain(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        sort ? 
        axios.get(`${REACT_APP_SERVER_URL}/api/bigmacs/least`)
        .then(response => {
            setMain(response.data)
        })
        .catch(err => console.log(err))

        :
        axios.get(`${REACT_APP_SERVER_URL}/api/bigmacs/most`)
        .then(response => {
            setMain(response.data)
        })
        .catch(err => console.log(err))
    }, [sort])

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

    return(
        <div>
            <div className="mapContainer">
                <Map/>
            </div>
            <div className="bigMacPrices">

                <h3> All Big Mac Price Data </h3>
                <div id="navbarsExample07">
                    <ul className="navbar-nav ml-auto dataNavbar" >
                        {
                            <>
                                {/* <label for="location">Search:</label> */}
                                <Form onSubmit={(e) => handleMain(e)}>
                                    <input className="dataNavbar" name="location" type="text" value={location} onInput={handleLocation} placeholder="ex: Santa Monica"/>
                                    <Button className="btn-info" type="submit">SEARCH</Button>
                                </Form>    
                                <br></br>
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
                        <th> 
                            <a 
                                onClick={() => setSort(!sort)}
                            >
                            Big Mac Meal Price ↕ 
                            </a>
                        </th>
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