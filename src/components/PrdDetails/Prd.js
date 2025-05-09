import React from 'react'
import PrdImgs from './PrdImgs'
import PrdDetails from './PrdDetails'
import PrdCard from './PrdCard'
import MultiCarousel from '../MultiCarousel'

function Prd({ data, prdSuggest }) {
    return (
        <div className='px-2'>
            <div className='col-md-12 row mx-0'>
                <div className='col-md-6'>
                    <PrdImgs img_data={data?.prd_imgs ? data?.prd_imgs : data?.prd_img} />
                </div>
                <div className='col-md-6'>
                    <PrdDetails data={data} />
                </div>
            </div>
            <div className='my-5'>
                <h5>Suggested Products</h5>
                {
                    prdSuggest.length < 5
                        ?
                        <PrdCard prd_data={prdSuggest} detail_page={true} />
                        :
                        <MultiCarousel prd_data={prdSuggest} />
                }
            </div>
        </div>
    )
}

export default Prd
