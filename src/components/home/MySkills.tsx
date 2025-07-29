
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";import { SiMongodb } from "react-icons/si";import { BiLogoPostgresql } from "react-icons/bi";import { SiPrisma } from "react-icons/si";import { SiDocker } from "react-icons/si";import { TbBrandReactNative } from "react-icons/tb";import { SiAndroid } from "react-icons/si";import { SiApple } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";import { DiRedis } from "react-icons/di";
import { SiSocketdotio } from "react-icons/si";import { FaAws } from "react-icons/fa";import { SiFirebase } from "react-icons/si";import { SiRazorpay } from "react-icons/si";import { SiRedux } from "react-icons/si";import { SiGooglemaps } from "react-icons/si";import { FaGitAlt } from "react-icons/fa";import { FaGitlab } from "react-icons/fa6";import { FaGithub } from "react-icons/fa";import { SiGithubactions } from "react-icons/si";import { IoLogoGooglePlaystore } from "react-icons/io5";import { FaAppStoreIos } from "react-icons/fa";import { SiVercel } from "react-icons/si";import { SiRender } from "react-icons/si";import { BiLogoNetlify } from "react-icons/bi";import { FaReact } from "react-icons/fa";
const MySkills = () => {
    const skillsIcons: { id: string; label: string; icon: React.ReactElement }[] = [
        // 1. Languages
        { id: "javascript", label: "JavaScript", icon: <SiJavascript className="h-full w-full" /> },
        { id: "typescript", label: "TypeScript", icon: <SiTypescript className="h-full w-full" /> },
      
        // 2. Frontend
        { id: "react", label: "React", icon: <FaReact className="h-full w-full" /> },
        { id: "nextjs", label: "Next.js", icon: <SiNextdotjs className="h-full w-full" /> },
        { id: "redux", label: "Redux", icon: <SiRedux className="h-full w-full" /> },
      
        // 3. Mobile
        { id: "react-native", label: "React Native", icon: <TbBrandReactNative className="h-full w-full" /> },
        { id: "android", label: "Android", icon: <SiAndroid className="h-full w-full" /> },
        { id: "ios", label: "iOS", icon: <SiApple className="h-full w-full" /> },
      
        // 4. Backend
        { id: "nodejs", label: "Node.js", icon: <DiNodejs className="h-full w-full" /> },
        { id: "express", label: "Express", icon: <SiExpress className="h-full w-full" /> },
        { id: "socket-io", label: "Socket.IO", icon: <SiSocketdotio className="h-full w-full" /> },
        { id: "firebase", label: "Firebase", icon: <SiFirebase className="h-full w-full" /> },
      
        // 5. Databases
        { id: "mongodb", label: "MongoDB", icon: <SiMongodb className="h-full w-full" /> },
        { id: "postgresql", label: "PostgreSQL", icon: <BiLogoPostgresql className="h-full w-full" /> },
        { id: "prisma", label: "Prisma", icon: <SiPrisma className="h-full w-full" /> },
        { id: "redis", label: "Redis", icon: <DiRedis className="h-full w-full" /> },
      
        // 6. DevOps & Tools
        { id: "docker", label: "Docker", icon: <SiDocker className="h-full w-full" /> },
        { id: "git", label: "Git", icon: <FaGitAlt className="h-full w-full" /> },
        { id: "gitlab", label: "GitLab", icon: <FaGitlab className="h-full w-full" /> },
        { id: "github", label: "GitHub", icon: <FaGithub className="h-full w-full" /> },
        { id: "github-actions", label: "GitHub Actions", icon: <SiGithubactions className="h-full w-full" /> },
      
        // 7. Cloud & Hosting
        { id: "aws", label: "AWS", icon: <FaAws className="h-full w-full" /> },
        { id: "vercel", label: "Vercel", icon: <SiVercel className="h-full w-full" /> },
        { id: "render", label: "Render", icon: <SiRender className="h-full w-full" /> },
        { id: "netlify", label: "Netlify", icon: <BiLogoNetlify className="h-full w-full" /> },
      
        // 8. Payments & APIs
        { id: "razorpay", label: "Razorpay", icon: <SiRazorpay className="h-full w-full" /> },
        { id: "google-maps", label: "Google Maps", icon: <SiGooglemaps className="h-full w-full" /> },
      
        // 9. Platform Stores
        { id: "play-store", label: "Play Store", icon: <IoLogoGooglePlaystore className="h-full w-full" /> },
        { id: "app-store", label: "App Store", icon: <FaAppStoreIos className="h-full w-full" /> },
      ];
      
      
  return (
    <div className="p-5">
        {/* heading */}
        <div className="flex flex-1 text-size-section gap-2 items-center justify-center pb-10">
            <p className="font-medium">My</p> <p className="font-bold">Skills</p></div>

    {/* Skills */}
  <div className="flex flex-wrap justify-center flex-grow gap-5 ">
    {skillsIcons.map(({ id, label, icon }) => (
      <button
        key={id}
        className="flex flex-col justify-center items-center h-[10vh] w-[10vh] border-1 p-2 gap-3 rounded-sm 
        hover:bg-offBlackBg hover:text-offWhiteBg dark:hover:bg-offWhiteBg dark:hover:text-offBlackBg
        transition ease-in-out delay-50 hover:scale-105 duration-300"
      >
        {icon}
        <p className="text-size-xsmall font-semibold">{label}</p>
      </button>
    ))}
  </div>
  </div>
 


  )
}

export default MySkills