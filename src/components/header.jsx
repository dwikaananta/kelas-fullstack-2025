import { Link } from "react-router"

export const Header = () => {
    return (
        <div className="bg-zinc-800 text-white py-4">
            <div className="
                container mx-auto px-4 flex justify-between
            ">
                <h1 className="text-xl font-semibold">App Name</h1>
                <nav className="flex gap-x-3">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/todos">Todos</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </div>
        </div>
    )
}