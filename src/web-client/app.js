import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import NavigationBar from './components/navigation/NavigationBar';
import HomePage from './components/home/HomePage';
import TestHeightMapsPage from './components/test-heightmaps/TestHeightMapsPage';
import TestHeightMapViewer from './components/test-heightmaps/TestHeightMapViewer';

const appContainer = document.getElementById('app-container');

const dom = (
    <HashRouter>
        <div>

            <NavigationBar />

            <div>
                <Route exact path="/" component={HomePage} />
                
                <Route exact path="/test-heightmaps" component={TestHeightMapsPage} />
                <Route exact path="/test-heightmaps/:id" component={TestHeightMapViewer} />
            </div>
        </div>
    </HashRouter>
);

ReactDOM.render(dom, appContainer);