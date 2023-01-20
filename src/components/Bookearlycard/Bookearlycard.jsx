import React from 'react'

const Bookearlycard = ({data,click,img1,heading1,city,text3,price2,price1}) => {
    console.log("data",data)
  return (
    <div className='group'>
    <div onClick={click} className=' rounded-3xl  hover:scale-105 shadow-inner shadow-cyan-400  duration-500 group-hover:shadow-xl group-hover:shadow-cyan-300'>
    <div className='h-[150px] '><img className='w-[100%] rounded-tl-3xl rounded-tr-3xl h-[100%] bg-cover' src={img1} alt="list" /></div>
    <div className='px-4 py-4 relative'>
    <p className='text-xl font-semibold'> {heading1}</p>
    <p>{city}</p>
    <div className='py-2'>
    <div className='bg-[#ffc94c] absolute top-50% right-4 text-sm font-[500] rounded-full  inline-block px-3'>Member Price available</div>
    </div>
    <hr  />
    <div className='flex  justify-between pt-4'>
    <div className='flex flex-col gap-y-8'>
    <p className='font-semibold text-[#0d7066]'>{text3} </p>
    <p>Tue, 21 Mar - Thu, 23 Mar </p>
    </div>
    <div className=' flex flex-col justify-center'>
    <span className='flex flex-row gap-x-2'><p className='line-through'>Rs{price2}</p> <p className='text-xl font-bold'>₹{price2}</p></span>
    <p className='text-right'>per night</p>
    </div>
    </div>
    </div>
    </div>
    </div>
   
  )
}

export default Bookearlycard