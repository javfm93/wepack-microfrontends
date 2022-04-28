import React, {lazy, Suspense, useState, useEffect} from "react";
import { BrowserRouter, Route, Switch, Router, Redirect } from "react-router-dom";
// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp";
import Header from "./components/Header"
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import Progress from "./components/Progress";
import {createBrowserHistory} from 'history';

const LazyMarketing = lazy(() => import('./components/MarketingApp'))
const LazyAuth = lazy(() => import('./components/AuthApp'))
const LazyDashboard = lazy(() => import('./components/DashboardApp'))

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    useEffect(() => {
        if (isSignedIn) history.push('/dashboard')
    }, [isSignedIn])

    return <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
            <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
            <Suspense fallback={<Progress/>}>
            <Switch>
                <Route path="/auth">
                    <LazyAuth onSignIn={() => {setIsSignedIn(true)}}></LazyAuth>
                </Route>
                <Route path="/dashboard">
                    {isSignedIn ? <LazyDashboard/> : <Redirect to={"/"}/>}
                </Route>
                <Route path="/" component={LazyMarketing}/>
            </Switch>
            </Suspense>
        </Router>
        </StylesProvider>
}