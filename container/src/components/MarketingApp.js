import * as marketingApp from 'marketing/MarketingApp'
import React, {useRef, useEffect} from 'react'

export default ()=> {
    const ref = useRef(null)

    useEffect(() => {
        marketingApp.mount(ref.current)
    })

    return <div ref={ref}/>
}