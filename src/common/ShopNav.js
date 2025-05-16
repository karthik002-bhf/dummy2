import React from 'react'
import { data } from '@/app/product_data'
import Link from 'next/link'

function ShopNav() {
    const cat_data = data?.category
    return (
        <div>
            <div className='categoryBar mb-2'>
                <h5 className='px-3 my-auto'>Categories</h5>
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
                                <div className=' categoryItem'>
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