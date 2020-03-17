import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import NotFound from '../components/NotFound';

function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/badges' component={Badges} />
                    <Route exact path='/badges/new' component={BadgeNew} />
                    <Route exact path='/badges/:badgesId/edit' component={BadgeEdit} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </Layout>
    );
}

export default App;