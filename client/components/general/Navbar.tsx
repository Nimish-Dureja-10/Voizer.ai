interface NavbarProps {
    "agent_name" : string | undefined,
}
const Navbar = (props:NavbarProps) => {
    
  return ( 
    <div className="h-[9vh] bg-[#604ee1] flex justify-center items-center">
        <div>
            <h1 contentEditable
           className="text-white text-3xl">{!props.agent_name ? `Navbar` : `${props.agent_name}`}</h1>
        </div>
    </div>
  )
}

export default Navbar