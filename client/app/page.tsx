import Navbar from "@/components/general/Navbar";
import Sidebar from "@/components/general/Sidebar";
import Agent from "./agent/page";


export default function Home() {
  return (
    <div>
      <Navbar agent_name="Navbar" />
      <div className="flex">
        <Sidebar />
        <Agent />
      </div>
    </div>
  );
}
