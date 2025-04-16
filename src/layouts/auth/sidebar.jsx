import { CgUser } from "react-icons/cg";
import { MdReport } from "react-icons/md";
import { RiDashboard2Fill, RiHomeOfficeFill } from "react-icons/ri";
import { useLocation, Link } from "react-router";

export const Sidebar = () => {
    const location = useLocation();

    return (
      <div className="bg-gradient-to-b from-blue-950 to-blue-800 w-[18%]">
        {/* Logo */}
        <div className="flex items-end gap-2 h-[7vh] px-4 text-zinc-200">
            <RiHomeOfficeFill className="text-5xl" />
            <h1 className="font-semibold text-3xl">First APP</h1>
        </div>
        {/* Menus */}
        <div className="p-4 space-y-2">
            <Link to="/dashboard" className={`
                py-2 px-3 hover:opacity-75 rounded flex gap-1 items-center
                ${location.pathname === '/dashboard' ? 'bg-yellow-600' : 'bg-yellow-500'}
            `}>
                <RiDashboard2Fill className="mb-0.5" />
                <div>Dashboard</div>
            </Link>
            <Link to="/users" className={`
                py-2 px-3 hover:opacity-75 rounded flex gap-1 items-center
                ${location.pathname === '/users' ? 'bg-yellow-600' : 'bg-yellow-500'}
            `}>
                <CgUser className="mb-0.5" />
                <div>Users</div>
            </Link>
            <Link to="/report" className={`
                py-2 px-3 hover:opacity-75 rounded flex gap-1 items-center
                ${location.pathname === '/report' ? 'bg-yellow-600' : 'bg-yellow-400'}
            `}>
                <MdReport className="mb-0.5" />
                <div>Report</div>
            </Link>
        </div>
      </div>
    )
}