import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/AboutPage";

 const AppRouter = () => {
    return (
        <Router>
            <div className="h-100 d-flex flex-column">
                <Header />

                <div className="main-content flex-grow-1">
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
                </div>

                <Footer />
            </div>
        </Router>
    );
 };

 export default AppRouter;