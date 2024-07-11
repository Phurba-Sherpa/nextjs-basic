
const Layout = ({children}) => {
    return <div className="grid grid-cols-[200px_1fr] gap-4 grid-rows-[90px_1fr]">
        <nav className="h-screen p-4 border-r border-gray-300 row-span-2">
            <a className="mt-8 block" href="#">Dashboard</a>
        </nav>
        <nav className=" py-6 border border-gray-300 flex gap-x-16 justify-center">
            <p>Home</p>
            <p>About</p>
            <p>Contatc Us</p>
        </nav>
        {children}
    </div>
}

export default Layout