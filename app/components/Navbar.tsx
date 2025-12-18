import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <div className="flex gap-4 text-2xl">
            <Link className='hover:underline' href="/"> HOME</Link>
            <Link className='hover:underline' href="/about">About</Link>
            <Link className='hover:underline' href="/info">Info</Link>
            <Link className='hover:underline' href="/camp">CampPage</Link>
            </div>
        </nav>
    )
}
export default Navbar