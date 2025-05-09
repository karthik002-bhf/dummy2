import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MultiCarousel({ prd_data, detail_page }) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4.5,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3.5,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.7,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <Carousel
            swipeable={true}
            draggable={false}
            // showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
        >
            {
                prd_data?.map((e, index) => {
                    return (
                        // <div key={`prd_item${index}`} className={` px-0 px-md-2 mb-2`}>
                        <div key={`prd_item${index}`} className='card shadow-md h-100 p-3 mx-2'>
                            <Link href={`/Shop/${e?.prd_cat}/${e?.prd_slug}`} className='link'>
                                <div className='img_div'>
                                    <Image src={e?.prd_img} alt={`${e?.prd_name}`} fill className='img_css' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                </div>
                                <h5>{e?.prd_name}</h5>
                                {e?.prd_dimensions && <div className='font12'>Dimensions : {e?.prd_dimensions}</div>}
                                <div className=''>{e?.prd_short_description}</div>
                            </Link>
                        </div>
                        // </div>
                    )
                })
            }
        </Carousel>
    )
}

export default MultiCarousel
