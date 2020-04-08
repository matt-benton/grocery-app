import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Welcome from "../pages/welcome"
import SignUp from "../pages/signup"
import SignIn from "../pages/signin"
import Home from "../pages/home"
import { isAuthenticated } from "../auth"

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/home">
                {isAuthenticated() ? <Home /> : <Redirect to="/" />}
            </Route>
            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Router
