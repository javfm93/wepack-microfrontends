import * as dashboardApp from 'dashboard/dashboardApp';
import React, {useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

export default ()=> {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        dashboardApp.mount(ref.current);
    }, [])

    return <div ref={ref}/>
}