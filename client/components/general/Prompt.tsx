import React from 'react'

const Prompt = () => {
  return (
    <div className='w-[55%] flex flex-col border-r-2 bg-[#f0f1f5]'>
        <div className='flex flex-col px-10 pt-16 gap-4'>
            <h2 className='text-2xl font-semibold mx-4'>Name</h2>
            <input type={"text"} className={"p-4 rounded-xl border border-gray-800"} />
        </div>
        <div className='flex flex-col px-10 pt-8 '>
            <h2 className='text-2xl font-semibold mx-4'>Prompt</h2>
            <input type={"text"} className={"p-48 rounded-2xl border border-gray-800"} />
        </div>
    </div>
  )
}

export default Prompt