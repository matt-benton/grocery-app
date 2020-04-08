import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Router from "./components/Router"

class App extends React.Component {
    state = {
        user: {
            name: "matt",
            email: "matt@demo.com",
            password: "fkldjskfl;sajkfldsja",
        },
    }

    render() {
        return <Router />
    }
}

export default App
