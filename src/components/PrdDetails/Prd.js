'use client'
import dynamic from 'next/dynamic'
import React from 'react'
import PrdImgs from './PrdImgs'
import PrdDetails from './PrdDetails'
import PrdCard from './PrdCard'
// import MultiCarousel from '../MultiCarousel'
const MultiCarousel = dynamic(() => import('../MultiCarousel'), { ssr: false })

function Prd({ data, prdSuggest }) {

    return (
        <div className='px-2' data-aos="fade-up">
            <div className='col-md-12 row mx-0'>
                <div className='col-md-6' data-aos="fade-up">
                    <PrdImgs img_data={data?.prd_imgs ? data?.prd_imgs : data?.prd_img} />
                </div>
                <div className='col-md-6' data-aos="fade-up">
                    <PrdDetails data={data} />
                </div>
            </div>
            <div className='my-5' data-aos="fade-up">
                <h5>Suggested Products</h5>
                {
                    prdSuggest
                        ? prdSuggest?.length < 5
                            ?
                            <PrdCard prd_data={prdSuggest} detail_page={true} catSelected={true} />
                            :
                            <MultiCarousel prd_data={prdSuggest} />
                        : ''
                }
            </div>
        </div>
    )
}

export default Prd
