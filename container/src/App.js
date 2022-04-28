import React, {lazy, Suspense, useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp";
import Header from "./components/Header"
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import Progress from "./components/Progress";

const LazyMarketing = lazy(() => import('./components/MarketingApp'))
const LazyAuth = lazy(() => import('./components/AuthApp'))
const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false)

    return <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
            <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
            <Suspense fallback={<Progress/>}>
            <Switch>
                <Route path="/auth">
                    <LazyAuth onSignIn={() => {setIsSignedIn(true)}}></LazyAuth>
                </Route>
                <Route path="/" component={LazyMarketing}/>
            </Switch>
            </Suspense>
        </BrowserRouter>
        </StylesProvider>
}