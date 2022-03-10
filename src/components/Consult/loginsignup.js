import React from 'react'
import {Link} from 'react-router-dom'

const loginsignup = () => {
    return (
        <div>
            <ul>
                <Link to="/"><li>Login</li></Link>
                <Link to="/signup"><li>Sign Up</li></Link>
            </ul>
        </div>
    )
}

export default loginsignup
