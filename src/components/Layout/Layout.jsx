import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="container mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout;