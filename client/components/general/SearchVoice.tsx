import { Search } from 'lucide-react'
import React from 'react'

interface voiceProps {
  name : string,
  sex : string
}

const SearchVoice = () => {
  
    const voice:voiceProps[] = [
        {
            name : "Marie",
            sex : "Female"
        },
        {
            name : "Sarah",
            sex : "Female"
        },
        {
            name : "Mark",
            sex : "Male"
        },
        {
            name : "Sam",
            sex : "Male"
        },
    ]  
    
  return (
    <div className='w-60 h-[90vh] border-r-2 border-gray-200'>
        <div className='flex flex-col justify-center items-center'>
            <h3 className='mt-2 font-semibold'>Select Voice</h3>
            <div className='flex items-center mt-6'>
                <Search className='relative left-8' color='gray' size={22} />
                <input type={'text'} placeholder="Search Voice/Language" className='text-xs w-full text-center py-1 px-10 border border-gray-500 rounded-lg' />
            </div>
            <div className='flex items-center mt-4'>
                <div className='mb-4 text-gray-700 mr-1'>__________</div>
                <p className='text-xs text-gray-500'>English</p>
                <div className='mb-4 ml-1'> ___________</div>
            </div>
            {
                voice.map((item:voiceProps)=>(
                    <div className='flex items-center justify-between w-[90%] px-2 py-1 bg-[#eae9fc] mt-1 rounded-lg'>
                        <div className='font-bold'>{item.name}</div>
                        <div className='bg-[#604ee1] text-white rounded-md px-1 text-center text-xs w-12'>{item.sex}</div>
                    </div>
                ))
            }
            <div className='flex items-center mt-4'>
                <div className='mb-4 mr-1'>__________</div>
                <p className='text-xs text-gray-500'>Spanish</p>
                <div className='mb-4 ml-1'>___________</div>
            </div>
            {
                voice.map((item:voiceProps)=>(
                    <div className='flex items-center justify-between w-[90%] px-2 py-1 bg-[#eae9fc] mt-1 rounded-lg'>
                        <div className='font-bold'>{item.name}</div>
                        <div className='bg-[#604ee1] text-white rounded-md px-1 text-center text-xs w-12'>{item.sex}</div>
                    </div>
                ))
            }
            <div className='flex items-center mt-4'>
                <div className='mb-4 mr-1'>__________</div>
                <p className='text-xs text-gray-500'>French</p>
                <div className='mb-4 ml-1'>___________</div>
            </div>
            {
                voice.map((item:voiceProps)=>(
                    <div className='flex items-center justify-between w-[90%] px-2 py-1 bg-[#eae9fc] mt-1 rounded-lg'>
                        <div className='font-bold'>{item.name}</div>
                        <div className='bg-[#604ee1] text-white rounded-md px-1 text-center text-xs w-12'>{item.sex}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SearchVoice
