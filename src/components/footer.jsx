export const Footer = () => {
    return (
        <div className="bg-zinc-800 text-white py-4 fixed bottom-0 w-full">
            <div className="container mx-auto px-4">
                <p className="text-sm font-semibold">
                    App Name @{new Date().getFullYear()}
                </p>
            </div>
        </div>
    )
}