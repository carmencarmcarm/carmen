import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Header } from './views/header';
import { Footer } from './views/footer';
import { Home } from './views/home';
import { About } from './views/about';
import { Contact } from './views/contact';
import './style/index.scss';

export const App = (): JSX.Element => {
    return (
        <div className="app-content">
            <Header />
            <HashRouter>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/" component={Home} />
                </Switch>
            </HashRouter>
            <Footer />
        </div>
    );
};
