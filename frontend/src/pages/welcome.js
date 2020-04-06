import React from "react"
import { Link } from "react-router-dom"

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>Groceries</h1>
                <ul>
                    <Link to="/signup">
                        <li>Sign Up</li>
                    </Link>
                    <Link to="/signin">
                        <li>Sign In</li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Welcome
