import React from "react";
import {Switch, Route, Router} from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import Signin from './components/Signin'
import Signup from './components/Signup'

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

export default ({history}) => {
    console.log(history, 'ssssssssssss')
    return <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
        <Switch>
            <Route path='/auth/signin' component={Signin}/>
            <Route path='/auth/signup' component={Signup}></Route>
        </Switch>
        </Router>
    </StylesProvider>
}