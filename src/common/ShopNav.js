import React from 'react'
import { data } from '@/app/product_data'
import Link from 'next/link'

function ShopNav() {
    const cat_data = data?.category
    return (
        <div>
            <div className='categoryBar mb-2'>
                {/* <h5 className='px-3 my-auto'><Link href='/Shop' className='text-decoration-none text-black font24'>Categories :-</Link></h5> */}
                <Link href='/Shop' className='footer_link'><div className='categoryItem'>All Products</div></Link>

                {
                    cat_data?.map((e, index) => {
                        return (
                            <Link
                                href={{
                                    pathname: '/Shop',
                                    query: { index },
                                }}
                                className='footer_link'
                                key={`category-${index}`}
                            >
                                <div className='categoryItem'>
                                    {e?.name}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShopNav

{/* <Link
    href={{
        pathname: "episodes/[id]",
        query: {
            id: episode.itunes.episode,
            title: episode.title
        }
    }}
    as={`episodes/${episode.itunes.episode}-${kebabCase(episode.title)}`}
 >
... button stuff
</Link> */}