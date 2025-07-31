import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const ContactMe = () => {
  const socialIcons: { id: string; icon: React.ReactElement }[] = [
    { id: "github", icon: <FaGithub className="h-full w-full" /> },
    { id: "linkedin", icon: <FaLinkedinIn className="h-full w-full" /> },
  ];
  return (
    <div className="p-5 ">
      {/* heading */}
      <div className="flex flex-1 pb-5 "></div>

      {/* Contact form with side info */}
      <div className="flex flex-1 flex-col gap-4 p-3 rounded-lg bg-offGrayCard dark:bg-offSecondaryBlackCard">
        <div className="flex flex-1 ">
          {/* inside contact structure */}
          <div
            className={`flex flex-1 
             lg:flex-row
           flex-col gap-5`}
          >
            {/* Contact form - center on small screens */}
            <div className="flex flex-1 justify-center items-center sm:flex">
              <form className="flex  flex-1 flex-col gap-3 ">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full  border-1 border-offBlackBg dark:border-offWhiteBg text-size-small  placeholder:text-textGray focus:outline-none p-3 rounded-sm"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full  border-1 border-offBlackBg dark:border-offWhiteBg text-size-small  placeholder:text-textGray focus:outline-none p-3 rounded-sm"
                />
                <textarea
                  rows={4}
                  placeholder="How Can I Help You?"
                  className="w-full  border-1 border-offBlackBg   dark:border-offWhiteBg text-size-small placeholder:text-textGray p-3 focus:outline-none rounded-sm"
                />
                <div className="flex flex-1 flex-row gap-2">
                  <button
                    type="submit"
                    className="flex flex-1  h-[4.5vh] flex-row items-center justify-center bg-offBlackBg p-1.5  dark:bg-offWhiteBg dark:text-black text-white text-size-small transition ease-in-out delay-50  hover:scale-101 duration-300"
                  >
                    <p className="text-size-small font-bold">Get in Touch</p>
                    {/* 🌐 Socials */}
                  </button>
                  <div className="flex gap-2">
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
              </form>
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col gap-4 items-start justify-center ">
              {/* Title line */}
              <div className="flex flex-wrap leading-none">
                <p className="text-size-hero font-bold pr-2">Let's</p>

                <p
                  className="text-size-hero font-bold text-white leading-none pr-2"
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
                  talk
                </p>

                <p className="text-size-hero font-bold leading-none ">
                  for Something special
                </p>
              </div>

              {/* Description */}
              <p className="text-size-small font-medium text-textGray ">
                I seek to push the limits of creativity to create high-engaging,
                user-friendly, and memorable interactive experiences.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:maithaniji.official@gmail.com"
                  className="text-size-body font-bold hover:scale-101 transition"
                >
                  maithaniji.official@gmail.com
                </a>
                <a
                  href="tel:8595835350"
                  className="text-size-body font-bold hover:scale-101 transition"
                >
                  8595835350
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
