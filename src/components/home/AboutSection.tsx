import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import BannerSvg from "../../assets/images/Banner.svg?react";
import { TypeAnimation } from "react-type-animation";
const AboutSection = () => {
  const socialIcons: { id: string; icon: React.ReactElement }[] = [
    { id: "github", icon: <FaGithub className="h-full w-full" /> },
    { id: "linkedin", icon: <FaLinkedinIn className="h-full w-full" /> },
  ];
  return (
    <div className="p-5 ">
      <div className="lg:flex lg:flex-1 lg:flex-row ">
        {/* icon section for less than larger screen */}
        <div className="lg:hidden flex-1 flex h-[50%] w-[90%] pb-10">
          <BannerSvg className="w-fit  h-fit" />
        </div>
        {/* hero section */}
        <div className="flex flex-1 flex-col justify-center">
  {/* 👤 Name */}
  <div className="flex gap-2 flex-wrap">
    <p className="text-size-hero font-medium">Hello I'm</p>
    <TypeAnimation
      sequence={[
        "Tushar Maithani.",
        1000,
        "Mr. Maithani.",
        1000,
        "Maithani Ji.",
        1000
      ]}
      wrapper="span"
      cursor={false}
      speed={50}
      className="text-size-hero font-bold"
      repeat={Infinity}
    />
  </div>

  {/* 💼 Roles */}
  <div className="flex gap-2 flex-wrap">
    <TypeAnimation
      sequence={[
        "Full Stack",
        2000,
        "Mobile",
        2000,
        "Web",
        2000,
        "Backend",
        2000
      ]}
      wrapper="span"
      cursor={false}
      speed={50}
      className="text-size-hero font-bold"
      repeat={Infinity}
    />
    <p
      className="text-size-hero font-bold text-white"
      style={{
        textShadow: `
          -2px -2px 0 black,
           2px -2px 0 black,
          -2px  2px 0 black,
           2px  2px 0 black,
          -2px  0px 0 black,
           2px  0px 0 black,
           0px -2px 0 black,
           0px  2px 0 black
        `,
      }}
    >
      Developer
    </p>
  </div>

  {/* 📍 Location */}
  <div className="flex gap-2 flex-wrap">
    <p className="text-size-hero font-normal">Based</p>
    <TypeAnimation
      sequence={[
        "in India.",
        3000,
        "in Delhi/NCR.",
      
        3000,
        "in Bangalore.",
        3000
      ]}
      cursor={false}
      wrapper="span"
      speed={50}
      className="text-size-hero font-bold"
      repeat={Infinity}
    />
  </div>

  {/* 📝 About */}
  <div className="pt-5">
    <p className="text-size-small text-start font-normal text-textGray">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente
      harum quo consequatur sequi provident dolores molestias labore quam modi
      optio, eius nam facilis, nulla minus culpa perspiciatis consectetur
      quidem. Ratione nulla dolorem nesciunt error dolores ipsam commodi.
    </p>
  </div>

  {/* 🌐 Socials */}
  <div className="flex gap-2 pt-5">
    {socialIcons.map(({ id, icon }) => (
      <button
        key={id}
        className="flex justify-center items-center h-[4.5vh] w-[4.5vh] border-1 p-2 rounded-sm 
        hover:bg-offBlackBg hover:text-offWhiteBg dark:hover:bg-offWhiteBg dark:hover:text-offBlackBg
        transition ease-in-out delay-50 hover:scale-105 duration-300"
      >
        {icon}
      </button>
    ))}
  </div>
</div>

        {/* icon section */}
        <div className="hidden lg:flex lg:flex-1   h-[clamp(100px, 70vh, 100vh)] w-[clamp(100px, 70vh, 100vh)]  ">
          <BannerSvg className="w-full  h-full " />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
