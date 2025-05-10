import React from "react"
import { data } from "@/app/product_data"
import Prd from "../../../components/PrdDetails/Prd"

export default async function Page({ params }) {
    const { cat } = await params

    let prdData
    let prdSuggest = []

    data?.category?.forEach((category) => {
        if (category.cat_slug === cat[0]) {
            category.products.forEach((product) => {
                if (product.prd_slug === cat[1]) {
                    prdData = product
                } else {
                    prdSuggest.push(product)
                }
            })
        }
    })

    if (!prdData || prdData == undefined) {
        return (<>
            <div className='spinner mt-5'></div>
        </>)
    }
    return (
        <>
            <div className='container-fluid mt-4'>
                <Prd data={prdData} prdSuggest={prdSuggest} />
            </div>
        </>
    )
}

// export async function generateStaticParams(params) {
//     console.log('params', params)
//     const path = []
//     return path;
// }
