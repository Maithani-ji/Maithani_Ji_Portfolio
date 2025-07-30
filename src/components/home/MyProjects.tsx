

import  Banner2  from "../../assets/images/Banner2.svg?react"
import { FaExternalLinkAlt } from "react-icons/fa";
const MyProjects = () => { 
  const projects = [
    {
      id: "01",
      role: "Full Stack Developer at Goodle",
      description:
        "Developed a scalable admin dashboard with role-based authentication using React, Node.js, MongoDB, and TailwindCSS. Implemented charts, filters, and RESTful APIs.",
      image: <Banner2 className="w-fit h-fit" />,
      link: "https://goodle-admin-dashboard.com",
    },
    {
      id: "02",
      role: "Frontend Developer at QuickTech",
      description:
        "Built a responsive e-commerce frontend using React, Redux Toolkit, and styled-components. Integrated with payment gateways like Razorpay and optimized for performance.",
      image: <Banner2 className="w-fit h-fit" />,
      link: "https://quicktech-ecommerce.com",
    },
    {
      id: "03",
      role: "Backend Developer at CodeWave",
      description:
        "Created microservices for a real-time logistics platform using Node.js, Redis, and PostgreSQL. Set up CI/CD pipelines and WebSocket-based event communication.",
      image: <Banner2 className="w-fit h-fit" />,
      link: "https://codewave-logistics.com",
    },
  ];
  
  
return (
<div className="p-5">
{/* heading */}
<div className="flex flex-1 text-size-section gap-2 items-center justify-center pb-10">
    <p className="font-medium">My</p> <p className="font-bold">Projects</p></div>

{/* Projects */}
<div className="flex flex-1 flex-col gap-4">

{projects.map(({ id, role, description, image }, index) => (
  // project sturcture
  <div
    key={id}
    className="flex flex-1 bg-offGrayCard dark:bg-offSecondaryBlackCard p-3 py-5 rounded-lg  hover:bg-offBlackBg hover:text-offWhiteBg dark:hover:bg-offWhiteBg dark:hover:text-offBlackBg
        transition ease-in-out delay-50 duration-300"
  >
    {/* inside porject structure */}
    <div
      className={`flex flex-1 ${
        index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
      } flex-col gap-5`}
    >
      {/* Image - center on small screens */}
     <div className="flex justify-center items-center sm:flex">
     <div className="flex  h-[20vh] w-[20vh] ">
        {image}
      </div>
     </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-3 justify-center">
        <p className="text-size-section font-bold">{id}</p>
        <p className="text-size-body font-medium">{role}</p>
        <p className="text-size-small font-normal text-textGray">
          {description}
        </p>
        <a
          // href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit h-fit hover:scale-105 transition"
        >
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  </div>
))}


</div>
</div>
)
}

export default MyProjects