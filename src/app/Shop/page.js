'use client'
import React, { useEffect, useState } from 'react'
import { data } from '../product_data'
import Image from 'next/image'
import Link from 'next/link'
import PrdCard from '@/components/PrdDetails/PrdCard'
import { useSearchParams } from 'next/navigation'

function page() {
    const searchParams = useSearchParams();
    const [index, setIndex] = useState(0);

    const cat_data = data?.category
    const [prd_data, setPrdData] = useState(cat_data?.[0]?.products)
    useEffect(() => {
        const idx = searchParams.get('index');
        if (idx) {
            setIndex(idx);
            setPrdData(cat_data?.[parseInt(idx)]?.products)
        }
    }, [searchParams])
    return (
        <>
            <div className='container-fluid'>
                {/* <div className='categoryBar'>
                    <h5 className='px-3 my-auto'>Categories</h5>
                    {
                        cat_data?.map((e, index) => {
                            return (
                                <div key={`category-${index}`} className='cp categoryItem' onClick={() => setPrdData(e?.products)}>{e?.name}</div>
                            )
                        })
                    }
                </div> */}

                {/* <div className='col-md-12 row mx-0 mt-5'>
                    <div className='col-md-2 mb-2 mb-md-0'>
                        <div className='card'>
                            <div className='bg-primary p-2'><h5>Categories</h5></div>
                            {
                                cat_data?.map((e, index) => {
                                    return (
                                        <div key={`category-${index}`} className='px-2 py-1 cp' onClick={() => setPrdData(e?.products)}>{e?.name}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='col-md-'>
                        <div className='col-md-12 row mx-0'>
                            {
                                prd_data?.map((e, index) => {
                                    return (
                                        <div key={`prd_item${index}`} className='col-md-3 px-0 px-md-2 mb-2'>
                                            <Link href={`/Shop/${e?.prd_cat}/${e?.prd_slug}`} className='link'>
                                                <div className='card shadow-md h-100 p-3'>
                                                    <div className='img_div'>
                                                        <Image src={e?.prd_img} alt={`${e?.prd_name}`} fill className='img_css' />
                                                    </div>
                                                    <h5>{e?.prd_name}</h5>
                                                    {e?.prd_dimensions && <div className='font12'>Dimensions : {e?.prd_dimensions}</div>}
                                                    <div className=''>{e?.prd_short_description}</div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div> */}
                <div>
                    <PrdCard prd_data={prd_data} />
                </div>
            </div>
        </>
    )
}

export default page
