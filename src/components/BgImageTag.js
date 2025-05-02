import Image from 'next/image'
import React from 'react'

function BgImageTag({ src, alt, height, width, layout, className, priority }) {
    // let height = 500
    // let width = 500
    return (
        // <div className={`relative w-full h-auto ${className}`}>
        //     <Image
        //         layout={layout}
        //         src={src}
        //         alt={alt}
        //         className="object-contain w-full h-auto"
        //         priority={priority}
        //     />
        // </div>
        <div>
            <Image src={src} alt={alt} quality={100} layout={layout} className="bg_img_css" />
        </div>
    )
}

export default BgImageTag
