import React, {useState, useEffect} from "react"
import axios from 'axios'

const Data = (props) => {
    let [location, setLocation] = useState([]);
    let [price, setPrice] = useState([]);

    useEffect(() => {
        axios.get(`${localhost}`)
    })

    return(
        <div>
            <p>Data</p>
        </div>
    )
}

export default Data