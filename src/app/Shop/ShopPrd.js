'use client'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { data } from '../product_data';
import PrdCard from '@/components/PrdDetails/PrdCard';

function ShopPrd() {
    const searchParams = useSearchParams();
    const [catSelected, setCatSelected] = useState(false)
    const cat_data = data?.category
    const [prd_data, setPrdData] = useState(cat_data?.[0]?.products)
    useEffect(() => {
        const idx = searchParams.get('index');
        if (idx) {
            setCatSelected(true)
            setPrdData(cat_data?.[parseInt(idx)]?.products)
        } else {
            setCatSelected(false)
            setPrdData(cat_data)
        }

    }, [searchParams])
    return (
        <div>
            <PrdCard prd_data={prd_data} catSelected={catSelected} />
        </div>
    )
}

export default ShopPrd
