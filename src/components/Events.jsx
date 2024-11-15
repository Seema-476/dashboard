import React from 'react'

const Events = ({ active }) => {
  return (
    <div id="tab-2" className={`lg:max-w-[656px] min-h-[648px] rounded-lg bg-white w-full p-5 mb-7 ${active === 'tab-2' ? '!max-w-full' : ''}`}>
      <p className='font-bold text-2xl text-black '>You have 3 upcoming events</p>
    </div>
  )
}

export default Events
