import React from "react"
import DownloadBtn from "../../assets/icons/down.svg?react"
import BurgerBtn from "../../assets/icons/burger.svg?react"
const Navbar = () => {
  const midSection : string[]=["About Me","Skills","Projects","Contact Me"]
  return (
    <>
    {/* Top nav bar on web */}
      <div className="hidden sm:flex fixed top-0 left-0 right-0  p-5 text-size-body ">
      <div className="flex flex-1 flex-row justify-between items-center" >
        <div>
          <p className="font-bold">TM</p>
        </div>
        <div className="flex">
          <ul className="flex flex-row gap-5">
            {midSection.map((item, index) => (
              <li key={index} className="">
               <button className="hover:cursor-pointer hover:underline  hover:underline-offset-4 transition-all ease-in-out delay-50  hover:scale-105 duration-300 ">{item}</button> 
              </li>
            ))}
          </ul>
        </div>
        <button className="flex flex-row items-center justify-center bg-offBlackBg p-1.5  dark:bg-offWhiteBg dark:text-black text-white text-size-small transition ease-in-out delay-50  hover:scale-105 duration-300">
          <p>Resume</p>
            <DownloadBtn className=" h-[1.5vh] w-[1.5vh]"/>
        </button>
      </div>
    </div>

     {/* Top nav bar on web */}
     <div className="flex sm:hidden fixed top-0 left-0 right-0  p-5 text-size-body ">
      <div className="flex flex-1 flex-row justify-between items-center" >
        <div>
          <p className="font-bold">TM</p>
        </div>
       
        <button className="flex items-center justify-center transition ease-in-out delay-50  hover:scale-105 duration-300">
          
            <BurgerBtn className=" h-[3vh] w-[3vh]"/>
        </button>
      </div>
    </div>        

            

    {/* for bottom nav bar for small screen */}
    {/* <div className="sm:hidden fixed bottom-0 left-0 right-0  p-5 text-size-body ">
      <div className="flex flex-1 flex-row justify-between items-center" >
        <div>
          <p className="font-bold">TM</p>
        </div>
        <div className="flex">
          <ul className="flex flex-row gap-5">
            {midSection.map((item, index) => (
              <li key={index} className="">
               <button className="hover:cursor-pointer hover:underline  hover:underline-offset-4 transition-all ease-in-out delay-50  hover:scale-105 duration-300 ">{item}</button> 
              </li>
            ))}
          </ul>
        </div>
        <button className="flex flex-row items-center justify-center bg-offBlackBg p-1.5  dark:bg-offWhiteBg dark:text-black text-white text-size-small transition ease-in-out delay-50  hover:scale-105 duration-300">
          <p>Resume</p>
            <Download className=" h-[1.5vh] w-[1.5vh]"/>
        </button>
      </div>
    </div> */}
    </>
  
  )
}

export default Navbar