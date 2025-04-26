import Image from 'next/image'
import React from 'react'

function BgImageTag({ src, alt, height, width, layout }) {
    // let height = 500
    // let width = 500
    return (
        <div>
            <Image src={src} alt={alt} quality={100} layout={layout} />
        </div>
    )
}

export default BgImageTag
