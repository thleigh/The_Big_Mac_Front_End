import React, {useState, useEffect} from "react"
import axios from 'axios'
const BIG_MAC_SERVER_URL = process.env.BIG_MAC_SERVER_URL;
console.log(BIG_MAC_SERVER_URL)

const Data = (props) => {
    let [location, setLocation] = useState([]);
    let [price, setPrice] = useState([]);

    useEffect(() => {
        axios.get(`${BIG_MAC_SERVER_URL}/api/bigmacs/`)
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