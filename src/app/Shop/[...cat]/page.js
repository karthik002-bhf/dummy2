'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { data } from '@/app/product_data'
import { useParams } from 'next/navigation'
import Prd from '@/components/PrdDetails/Prd'

function page() {
    const params = useParams()
    const cat = params.cat
    const [prdData, setPrdData] = useState()
    const [prdSuggest, setPrdSuggest] = useState([])


    useLayoutEffect(() => {
        let rem_prd = []
        data?.category?.find((e) => {
            if (cat[0] == e?.cat_slug) {
                e?.products?.map((f) => {
                    if (f?.prd_slug == cat[1]) {
                        setPrdData(f)
                    } else {
                        rem_prd = [...rem_prd, f]
                    }
                })
            }
        })
        setPrdSuggest(rem_prd)
    }, [cat])

    console.log('prdData', prdData)

    if (prdData == undefined) {
        return (
            <div id="spinner" className="spinner mt-5"></div>
        )
    }


    return (
        <div className='container-fluid mt-4'>
            <Prd data={prdData} prdSuggest={prdSuggest} />
        </div>
    )
}

// export async function generateStaticParams() {

//     return;
// }

export default page
