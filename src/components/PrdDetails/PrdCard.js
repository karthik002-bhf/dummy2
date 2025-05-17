import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function PrdCard({ prd_data, detail_page, catSelected }) {
    return (
        <div className=''>
            {!catSelected ?
                prd_data?.map((item, index) => {
                    return (
                        <div key={`prd_cat${index}`} className='col-md-12 row mx-0 px-0 px-md-2 mb-2'>
                            <h3>{item?.name}</h3>
                            {
                                item?.products?.map((e, index) => {
                                    return (
                                        <div key={`prd_item${index}`} className={`${detail_page ? 'col-md-2' : 'col-md-3'} px-0 px-md-2 mb-2`}>
                                            <div className='card shadow-md h-100 p-3'>
                                                <Link href={`/Shop/${e?.prd_cat}/${e?.prd_slug}`} className='link'>
                                                    <div className='img_div'>
                                                        <Image src={e?.prd_img} alt={`${e?.prd_name}`} fill className='img_css' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={true} />
                                                    </div>
                                                    <h5>{e?.prd_name}</h5>
                                                    {e?.prd_dimensions && <div className='font12'>Dimensions : {e?.prd_dimensions}</div>}
                                                    <div className=''>{e?.prd_short_description}</div>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
                :
                <div className='col-md-12 row mx-0'>
                    {
                        prd_data?.map((e, index) => {
                            return (
                                <div key={`prd_item${index}`} className={`${detail_page ? 'col-md-2' : 'col-md-3'} px-0 px-md-2 mb-2`}>
                                    <div className='card shadow-md h-100 p-3'>
                                        <Link href={`/Shop/${e?.prd_cat}/${e?.prd_slug}`} className='link'>
                                            <div className='img_div'>
                                                <Image src={e?.prd_img} alt={`${e?.prd_name}`} fill className='img_css' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={true} />
                                            </div>
                                            <h5>{e?.prd_name}</h5>
                                            {e?.prd_dimensions && <div className='font12'>Dimensions : {e?.prd_dimensions}</div>}
                                            <div className=''>{e?.prd_short_description}</div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default PrdCard
