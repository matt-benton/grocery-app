import React from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends React.Component {
    state = {
        user: {
            name: "matt",
            email: "matt@demo.com",
            password: "fkldjskfl;sajkfldsja",
        },
    }

    render() {
        return <div>Home!!!</div>
    }
}

export default App
