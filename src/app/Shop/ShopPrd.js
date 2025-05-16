'use client'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { data } from '../product_data';
import PrdCard from '@/components/PrdDetails/PrdCard';

function ShopPrd() {
    const searchParams = useSearchParams();

    const cat_data = data?.category
    const [prd_data, setPrdData] = useState(cat_data?.[0]?.products)
    useEffect(() => {
        const idx = searchParams.get('index');
        if (idx) {
            setPrdData(cat_data?.[parseInt(idx)]?.products)
        }
    }, [searchParams])
    return (
        <div>
            <PrdCard prd_data={prd_data} />
        </div>
    )
}

export default ShopPrd
