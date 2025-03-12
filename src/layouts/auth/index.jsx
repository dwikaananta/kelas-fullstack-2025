export const AuthLayout = ({ children }) => {
  return (
    <div className="bg-red-500 min-h-[100vh] flex">
      {/* SIDEBAR */}
      <div className="bg-blue-500 w-[18%]">Sidebar</div>

      <div className="bg-green-500 w-full p-6 flex flex-col gap-6">
        {/* TOP BAR */}
        <div className="bg-yellow-500 h-[7vh]">Topbar</div>

        {/* CONTENT */}
        <div className="bg-purple-500 grow">
          {children}
        </div>

        {/* FOOTER */}
        <div className="bg-black h-[7vh] text-white">footer</div>
      </div>
    </div>
  )
}
