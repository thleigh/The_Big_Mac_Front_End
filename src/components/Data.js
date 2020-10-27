import React, {useState, useEffect} from "react"
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Data = (props) => {
    let [location, setLocation] = useState([]);
    // let [price, setPrice] = useState([]);
    console.log(REACT_APP_SERVER_URL)

    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/api/bigmacs/`)
        .then(response => {
            setLocation(response.data[0])
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <p>Data</p>
            <p>Location: {location}</p>
        </div>
    )
}

export default Data