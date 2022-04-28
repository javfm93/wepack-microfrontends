import React from 'react'
import  ReactDOM  from 'react-dom';
import App from './App';
import {createMemoryHistory, createBrowserHistory} from 'history';

const mount = (el, {onNavigate, defaultHistory}) => {
    const history = defaultHistory ?? createMemoryHistory();
    history.listen(onNavigate);
    ReactDOM.render(<App history={history}> We are react !</App>, el)
    const onParentNavigate = (nextLocation) => {
        const {pathname} = history.location;
        const nextPath = nextLocation.pathname
        if (pathname !== nextPath) history.push(nextPath)
    }
    return {onParentNavigate}
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#marketing-page')
    const onNavigate = () => console.warn("On navigate was called");
    const defaultHistory = createBrowserHistory();
    if (el) mount(el, {onNavigate, defaultHistory})
}

export { mount }