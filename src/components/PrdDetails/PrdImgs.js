'use client'
import Image from 'next/image'
import React from 'react'

function PrdImgs({ img_data }) {
    return (
        <div>
            {
                typeof (img_data) == 'string' ?
                    <div className=' img_div'>
                        <Image src={img_data} alt="Feature Image" fill className='img_css' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                    :
                    <div>carousel</div>
            }
        </div>
    )
}

export default PrdImgs
