import React from 'react'

function page({params}) {
    const { emart } = params;
    console.log("emart", emart)
  return (
    <div>
      {emart}
    </div>
  )
}

export default page
