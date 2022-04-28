import * as marketingApp from 'marketing/MarketingApp';
import React, {useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

export default ()=> {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const onNavigate = (nextLocation) => {
            const {pathname} = history.location;
            const nextPath = nextLocation.pathname
            if (pathname !== nextPath) history.push(nextPath)
        }
        const {onParentNavigate} = marketingApp.mount(ref.current, {onNavigate});
        history.listen(onParentNavigate)
    }, [])

    return <div ref={ref}/>
}