import React from "react"
import bigmac from '../assets/big-mac.png'

const Welcome = (props) => {

    return(
        <div>
            <img src={bigmac}></img>
            <h3>Welcome to The Big Mac Project</h3>
            <p>The Big Mac Project compares every Big Mac meal price in every major city across the US.</p>
            <button className='btn btn-info'> Get Started </button>
        </div>
    )
}

export default Welcome