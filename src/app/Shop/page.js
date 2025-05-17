import React, { Suspense } from 'react'
import ShopPrd from './ShopPrd'

function page() {
    return (
        <>
            <div className='container-fluid'>
                <div>
                    <Suspense fallback={<p>Loading shop content...</p>}>
                        <ShopPrd />
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default page
