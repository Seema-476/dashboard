import React from 'react'

const Welcome = () => {
  return (
    <div className='relative'>
      <div className='bg-yellow lg:h-[240px] h-[170px] w-full lg:pt-10 pt-7 ps-[35px] fixed'>
        <p className='font-bold lg:text-4xl text-2xl text-black lg:pb-5 pb-3'>Welcome back, Zareh 👋🏻</p>
        <p className='font-normal lg:text-base text-sm text-black'>Below you find your upcoming events, enrolled programmes and progress</p>
      </div>
    </div>
  )
}

export default Welcome
