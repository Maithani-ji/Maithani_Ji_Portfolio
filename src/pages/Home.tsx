
import AboutSection from "../components/home/AboutSection"
import MySkills from "../components/home/MySkills"
import MyExperience from "../components/home/MyExperience"
import AboutMe from "../components/home/AboutMe"
import MyProjects from "../components/home/MyProjects"

const Home = () => {
  return (
    <div className="flex flex-1 flex-col gap-5 pt-15 min-h-screen overflow-auto">
      <AboutSection/>
      <MySkills/>
      <MyExperience/>
      <AboutMe/>
      <MyProjects/>
    </div>
  )
}

export default Home