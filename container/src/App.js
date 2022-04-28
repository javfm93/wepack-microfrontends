import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp";
import Header from "./components/Header"
import { createGenerateClassName, StylesProvider } from "@material-ui/core";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})
export default () => {
    return <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/auth" component={AuthApp}/>
                <Route path="/" component={MarketingApp}/>
            </Switch>
        </BrowserRouter>
        </StylesProvider>
}