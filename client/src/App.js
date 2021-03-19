import React from "react";
<<<<<<< HEAD
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage";
=======
import Body from "./components/Body";
>>>>>>> fdf9c8e... edited styling
import Header from "./components/Header";
import "./App.css";

function App() {
    return (
<<<<<<< HEAD
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/signup" />
                </Route>

                <Route exact path="/signup">
                    <LandingPage />
                </Route>

                <Route exact path="/home">
                    {/* Replace following component with actual Home component when created */}
                    <Header />
                    <Body />
                </Route>
            </Switch>
        </BrowserRouter>
=======
        <div className="App">
            <Header />
            <Body />
        </div>
>>>>>>> fdf9c8e... edited styling
    );
}

export default App;
