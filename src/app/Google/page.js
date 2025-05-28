import React from 'react'
import { site_url } from '../../../config/type'
import Maps from './maps'

function page() {
    return (
        <div>
            <h1>Google Maps</h1>
            <div id="map" >{process.env.GOOGLE_MAPS_API_KEY}</div>
            <div>
                <Maps />
            </div>
        </div>
    )
}

export default page
