
import Footer from "../components/footer/Footer"
import Navbar from "../components/header/Navbar"
import { Outlet } from "react-router-dom"


const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout