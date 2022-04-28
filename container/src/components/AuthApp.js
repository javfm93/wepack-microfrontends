import * as authApp from 'auth/authApp';
import React, {useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

export default ({onSignIn})=> {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const onNavigate = (nextLocation) => {
            const {pathname} = history.location;
            const nextPath = nextLocation.pathname
            if (pathname !== nextPath) history.push(nextPath)
        }
        const initialPath = history.location.pathname;
        const {onParentNavigate} = authApp.mount(ref.current, {onNavigate, initialPath, onSignIn});
        history.listen(onParentNavigate)
    }, [])

    return <div ref={ref}/>
}