import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Welcome from "../pages/welcome"
import SignUp from "../pages/signup"
import SignIn from "../pages/signin"
import App from "../App"
import { isAuthenticated } from "../auth"

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/home">
                {isAuthenticated() ? <App /> : <Redirect to="/" />}
            </Route>
            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Router
