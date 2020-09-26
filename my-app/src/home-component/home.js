import React from 'react';
import About from "../about-component/about";
import './home.scss';

function Heading(){
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-7 d.flex justify-content-center">
                    <h1 className="home-heading"> Share Credentials Safely </h1>
                    <h2 className="home-heading-description"> Send a Temporary Secret Code Protected Link With Your Credentials </h2>
                </div>
            </div>
        </div>
    );
}

function Home() {
    return (
        <main>
            <Heading> </Heading>
            <About> </About>
        </main>
    );
}


export default Home;
