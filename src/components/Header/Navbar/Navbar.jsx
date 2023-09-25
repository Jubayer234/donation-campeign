import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <nav  className="md:flex items-center justify-between pt-10 md:p-14 lg:pt-10">
        <div className="flex justify-center mb-6 md:mb-0"><img src="/img/Logo.png" alt="" /></div>
            <ul  className=" md:flex text-center items-center space-y-5 md:space-y-0 gap-16 text-lg font-semibold ">
                <li>
                <NavLink
                to="/"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>
            Home
            </NavLink>
                </li>
                <li>
                <NavLink
                to="/Donation"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>
            Donation
            </NavLink>
                </li>
                <li>
                <NavLink
                to="/Statistics"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>
            Statistics
            </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar