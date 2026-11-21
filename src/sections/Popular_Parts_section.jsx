import React from 'react'

const Popular_Parts_section = () => {
  return (
    <div className=' w-full h-full p-20 flex flex-col items-center'>
        <p className=" text-blue-600 uppercase mb-8 text-sm font-semibold tracking-widest">PARTS FOR POPULAR MAKES</p>
        <div className=' w-full flex justify-between space-x-3 items-center'>
            <p className=' uppercase font-bold text-gray-500 text-xl'>Toyota</p>
            <p className=' uppercase font-bold text-gray-500 text-xl'>HONDA</p>
            <p className=' uppercase font-bold text-gray-500 text-xl'>NISSAN</p>
            <p className=' uppercase font-bold text-gray-500 text-xl'>SUZUKI</p>
            <p className=' uppercase font-bold text-gray-500 text-xl'>MITSUBISHI</p>
            <p className=' uppercase font-bold text-gray-500 text-xl'>BMW</p>
            <p className=' uppercase font-bold text-gray-500 text-xl'>Mercedes-Benz</p>
            <p className=' uppercase font-bold text-gray-500 text-xl'>MAZDA</p>
            <p className=' uppercase font-bold text-gray-500 text-xl'>ISUZU</p>
        </div>
    </div>
  )
}

export default Popular_Parts_section