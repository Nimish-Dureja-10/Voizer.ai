import { AudioLines, Calendar, Hash, Settings } from "lucide-react"

const Sidebar = () => {
  return (
    <div className="w-20 h-[90vh] border-r-2 border-gray-200 flex items-center flex-col gap-2">
        <div className="mt-6 p-2">
            <AudioLines size={28} />
        </div>
        <div className="mt-6 p-2 bg-[#d7d2f7] rounded-lg">
            <Settings size="28" />
        </div>
        <div className="mt-6">
            <Calendar size="28" />
        </div>
        <div className="mt-6">
            <Hash size="28" />
        </div>
    </div>
  )
}

export default Sidebar