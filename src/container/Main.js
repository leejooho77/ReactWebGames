import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from '../components/Layout.js';
import MainPage from '../components/Main/MainPage.js';
import GhostLegsPage from '../components/GhostLegs/container/GhostLegsPage.js';
import About from '../components/About/About.js';

const Main = () => {
    return (
        <Router>
            <div style={{
                margin: '10px auto',
                width: '90%'
            }}>
                <Layout>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/ghostlegs" component={GhostLegsPage} />
                    <Route path="/about" component={About} />
                </Layout>
            </div>
        </Router>
    );
};

export default Main;