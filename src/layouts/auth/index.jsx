import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";
import { Footer } from "./footer";

export const AuthLayout = ({ children }) => {
  return (
    <div className="bg-zinc-400 min-h-[100vh] flex">
      {/* SIDEBAR */}
      <Sidebar />

      <div className="w-full p-6 flex flex-col gap-6">
        {/* TOP BAR */}
        <Topbar />

        {/* CONTENT */}
        <div className="bg-white rounded p-6 grow">
          {children}
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  )
}
