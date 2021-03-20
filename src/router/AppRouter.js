import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Header from "../components/Header";
import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/AboutPage";

 const AppRouter = () => {
    return (
        <Router>
            <Header />

            <Switch>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    );
 };

 export default AppRouter;