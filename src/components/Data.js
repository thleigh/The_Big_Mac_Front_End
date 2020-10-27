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
            setLocation(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <h3>Data</h3>
            <p>{location.map((bigmac, index) => (
                    <p>
                       Location: {bigmac.location}
                        <br></br>
                       Price: {bigmac.price}
                    </p>
                ))}
            </p>
        </div>
    )
}

export default Data