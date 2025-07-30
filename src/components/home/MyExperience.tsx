
import { ImOffice } from "react-icons/im";
const MyExperience = () => {
    const experiences = [
        {
          id: "exp1",
          role: "Full Stack Developer at Goodle",
          icon: <ImOffice className="h-fit w-fit" />,
          date: "2022 - 2023",
          description:
            "Worked on scalable web applications and RESTful APIs. Collaborated closely with designers and DevOps teams to ship production-ready features using React, Node.js, and MongoDB.",
        },
        {
          id: "exp2",
          role: "Frontend Developer at QuickTech",
          icon: <ImOffice className="h-fit w-fit" />,
          date: "2021 - 2022",
          description:
            "Built responsive UI components using React and Tailwind. Improved page performance by 30% through optimized rendering strategies and lazy loading.",
        },
        {
          id: "exp3",
          role: "Software Engineer Intern at CodeWave",
          icon: <ImOffice className="h-fit w-fit" />,
          date: "2020 - 2021",
          description:
            "Assisted in developing internal tools and dashboards. Gained experience with TypeScript, Git workflows, and team-based development practices.",
        },
      ];
      
  return (
    <div className="p-5">
    {/* heading */}
    <div className="flex flex-1 text-size-section gap-2 items-center justify-center pb-10">
        <p className="font-medium">My</p> <p className="font-bold">Experience</p></div>

{/* Experience */}
<div className="flex flex-1 flex-col gap-4">

{experiences.map(({ id, role, icon, date, description }) => (
  <div key={id} className="flex flex-col flex-1 gap-2  bg-offGrayCard dark:bg-offSecondaryBlackCard p-3 rounded-lg 
   hover:bg-offBlackBg hover:text-offWhiteBg dark:hover:bg-offWhiteBg dark:hover:text-offBlackBg
        transition ease-in-out delay-50 duration-300
  ">
    <div className="flex flex-1 lg:flex-row flex-col lg:justify-between lg:items-center gap-3">
      {/* icon and title */}
      <div className="flex flex-1 items-center gap-3">
        <div className="flex justify-center items-center h-[3.3vh] w-[3.3vh] p-2 border-1 rounded-md">
          {icon}
        </div>
        <p className="text-size-body font-medium">{role}</p>
      </div>
      {/* Date */}
      <div className="flex">
        <p className="text-size-small font-normal">{date}</p>
      </div>
    </div>
    <p className="text-size-small font-normal text-textGray">
      {description}
    </p>
  </div>
))}
</div>
</div>
  )
}

export default MyExperience