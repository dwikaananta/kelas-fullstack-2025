import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";
import { Footer } from "./footer";

export const AuthLayout = ({ children }) => {
  return (
    <div className="bg-red-500 min-h-[100vh] flex">
      {/* SIDEBAR */}
      <Sidebar />

      <div className="bg-green-500 w-full p-6 flex flex-col gap-6">
        {/* TOP BAR */}
        <Topbar />

        {/* CONTENT */}
        <div className="bg-purple-500 grow">
          {children}
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  )
}
