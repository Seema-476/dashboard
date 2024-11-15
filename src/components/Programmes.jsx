import React from 'react'

const Programmes = ({active}) => {
  return (
    <div id="tab-4" className={`lg:max-w-[464px] min-h-[648px] mb-7 rounded-lg bg-white w-full p-5 ${active === 'tab-4' ? 'active' : '!max-w-full'}`}>
          <p className='font-bold text-2xl text-black '>Your programmes</p>
      </div>
  )
}

export default Programmes
