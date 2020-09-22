import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import Header from "./header-component/header";
import Footer from "./footer-component/footer";


function App() {
    return (
        <div className="App">
            <Header> </Header>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <h1>Home</h1>
                    </Route>
                    <Route path="/share">
                        <h1>Share</h1>
                    </Route>
                    <Route path="/get">
                        <h1>get</h1>
                    </Route>
                </Switch>
            </Router>
            <Footer> </Footer>
        </div>
    );
}

export default App;
