"use client"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { Edit } from "lucide-react";

interface agentProps {
    "agent_id" : string,
    "agent_name" : string,
    "voice_id" : string,
    "language" : string
}

const AgentsTable = () => {
    
    const [agentsList,setAgentsList] = useState<agentProps[]>([])
    
    const getAgentsList = async () => {
        try {
            const res = await axios.get(`https://api.retellai.com/list-agents`,{
                headers: {
                    'Authorization': `Bearer key_97a1de5c8fdffa980039a796d674`
                }
            });
            console.log(res?.data);
            setAgentsList(res?.data);
        }catch(error){
            alert("Failed to fetch list of agents, try again later!");
        }
    }

    useEffect(()=>{
        getAgentsList();
    },[]);
  
  return (
    <Table>
        {/* <TableCaption>A list of Agents</TableCaption> */}
        <TableHeader>
            <TableRow>
                <TableHead className="text-center">Agent Name</TableHead>
                <TableHead className="text-center">Voice</TableHead>
                <TableHead className="text-center">Language</TableHead>
                <TableHead>Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                agentsList.map((agent:agentProps)=>(
                    <TableRow key={agent.agent_id}>
                        <TableCell className="text-center">{agent.agent_name}</TableCell>
                        <TableCell className="text-center">{agent.voice_id.slice(7)}</TableCell>
                        <TableCell className="text-center">{agent.language}</TableCell>
                        <TableCell>
                            <Link href={`/agent/${agent.agent_id}`} id={agent.agent_id}>
                                <Edit />
                            </Link>
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
  )
}

export default AgentsTable
