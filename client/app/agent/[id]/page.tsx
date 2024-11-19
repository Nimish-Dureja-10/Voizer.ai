"use client"
import Navbar from '@/components/general/Navbar'
import Sidebar from '@/components/general/Sidebar'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {usePathname} from "next/navigation";
import SearchVoice from '@/components/general/SearchVoice'
import Prompt from '@/components/general/Prompt'
import { Button } from '@/components/ui/button'


interface agentProps {
    "agent_id" : string,
    "agent_name" : string,
    "voice_id" : string,
    "language" : string
}

const SingleAgent = () => {

  const [agent,setAgent] = useState<agentProps | null>(null);  
  const pathName = usePathname();

  const getAgentDetails = async () => {
    try {
        const id = pathName?.slice(7).toString();
        const res = await axios.get(`https://api.retellai.com/get-agent/${id}`,{
            headers: {
                'Authorization': `Bearer key_97a1de5c8fdffa980039a796d674`
            }
        });
        console.log(res?.data);
        setAgent(res?.data);
        }catch(error){
            alert("Failed to fetch list of agents, try again later!");
        }
    }

    useEffect(()=>{
        getAgentDetails();
    },[]);

  return (
    <div>
        <Navbar agent_name={agent?.agent_name} />
        <div className='flex'>
            <Sidebar />
            <SearchVoice />
            <Prompt />
            <div className='flex flex-col w-[25%] items-center mt-8'>
                <div className='flex items-center justify-between w-[80%] pl-2 pr-4 py-1 bg-[#d8d3f7] mt-1 rounded-lg border border-black'>
                    <div className='font-semibold bg-white px-8 py-1 rounded-md'>Test Call</div>
                    <div className='rounded-md font-black text-md px-1 text-center'>Test Chat</div>
                </div>
                <div className='flex flex-col items-center justify-between w-[80%] pl-2 pr-4 py-1 bg-[#d8d3f7] mt-24 rounded-lg border border-black'>
                    <input className='w-full bg-inherit text-light placeholder:text-gray-500' placeholder='Select Phone Number' />
                </div>
                <div className='flex flex-col items-center justify-between w-[80%] pl-2 pr-4 py-1 bg-[#d8d3f7] mt-4 rounded-lg border border-black'>
                    <input className='w-full bg-inherit text-light placeholder:text-gray-500' placeholder='Enter Name' />
                </div>
                <div className='flex flex-col items-center justify-between w-[80%] pl-2 pr-4 py-1 bg-[#d8d3f7] mt-4 rounded-lg border border-black'>
                    <input className='w-full bg-inherit text-light placeholder:text-gray-500' placeholder='Enter Phone Number' />
                </div>
                <Button className='w-[80%] mt-4 bg-[#5f4ee1] text-lg font-semibold rounded-md'>Call Me</Button>
            </div>
        </div>
    </div>
  )
}

export default SingleAgent