import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";
import { Footer } from "./footer";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const AuthLayout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get("_token")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="bg-zinc-400 min-h-[100vh] flex">
      {/* SIDEBAR */}
      <Sidebar />

      <div className="w-full p-6 flex flex-col gap-6">
        {/* TOP BAR */}
        <Topbar />

        {/* CONTENT */}
        <div className="bg-white rounded p-6 grow">{children}</div>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
};
