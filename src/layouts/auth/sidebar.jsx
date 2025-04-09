import { CgUser } from "react-icons/cg";
import { MdReport } from "react-icons/md";
import { RiDashboard2Fill, RiHomeOfficeFill } from "react-icons/ri";

export const Sidebar = () => {
    return (
      <div className="bg-gradient-to-b from-blue-950 to-blue-800 w-[18%]">
        {/* Logo */}
        <div className="flex items-end gap-2 h-[7vh] px-4 text-zinc-200">
            <RiHomeOfficeFill className="text-5xl" />
            <h1 className="font-semibold text-3xl">First APP</h1>
        </div>
        {/* Menus */}
        <div className="p-4 space-y-2">
            <div className="py-2 px-3 bg-yellow-600 rounded flex gap-1 items-center hover:text-red-500">
                <RiDashboard2Fill className="mb-0.5" />
                <div>Dashboard</div>
            </div>
            <div className="py-2 px-3 bg-yellow-600 rounded flex gap-1 items-center">
                <CgUser className="mb-0.5" />
                <div>Users</div>
            </div>
            <div className="py-2 px-3 bg-yellow-600 rounded flex gap-1 items-center">
                <MdReport className="mb-0.5" />
                <div>Report</div>
            </div>
        </div>
      </div>
    )
}