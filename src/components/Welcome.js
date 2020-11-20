import React from "react"
import bigmac from '../assets/big-mac.png'
import { Link } from 'react-router-dom';

const Welcome = (props) => {

    return(
        <div>
            <img src={bigmac} alt="big mac boi"></img>
            <h3>Welcome to The Big Mac Project</h3>
            <p>The Big Mac Project compares the price of every Big Mac meal in major cities across the US.</p>
            <p>How much does your local Big Mac meal cost?</p>
            <Link to="/data">
                <button className='btn btn-info'> Get Started </button>
            </Link>
        </div>
    )
}

export default Welcome