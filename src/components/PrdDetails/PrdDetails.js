import React from 'react'

function PrdDetails({ data }) {
    return (
        <div className='pt-3'>
            <div className=''>
                <h4>{data?.prd_name}</h4>
                <div className='font20' style={{ color: 'red' }}>{data?.prd_price} <small className='font14'>Approximately</small></div>

                <div className='py-4'>
                    <h6 style={{textDecoration:'underline'}}>About Product :-</h6>
                    <div dangerouslySetInnerHTML={{ __html: data?.prd_description }} />
                </div>
            </div>
        </div>
    )
}

export default PrdDetails
