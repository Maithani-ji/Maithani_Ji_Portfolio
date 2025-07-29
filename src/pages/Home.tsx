import React from "react"
import AboutSection from "../components/home/AboutSection"
import MySkills from "../components/home/MySkills"

const Home = () => {
  return (
    <div className="flex flex-1 flex-col gap-5 pt-15 min-h-0 overflow-auto">
      <AboutSection/>
      <MySkills/>
    </div>
  )
}

export default Home