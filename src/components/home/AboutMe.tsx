
import  Banner2  from "../../assets/images/Banner2.svg?react"
const AboutMe = () => {
    return (
        <div className="flex flex-1 lg:flex-row justify-center items-center flex-col  p-5 gap-5 lg:justify-between lg:items-start  ">
          {/* image */}
         <div className="flex h-[clamp(290px,25vw,600px)]  w-[clamp(290px,25vw,600px)]">
          <Banner2 className="w-fit  h-fit" />
        </div>
          {/* heading */}
          <div className="flex flex-1 flex-col gap-2 ">
          <div className="flex flex-1 text-size-section gap-2  ">
            <p className="font-medium">About</p> <p className="font-bold">Me</p></div>
           <div>
           <p className="text-size-small font-normal text-textGray">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio nostrum aperiam placeat quaerat a fuga est ipsa labore magni temporibus, atque facere in blanditiis voluptatibus earum quis sit neque!
    Ipsum, incidunt quae aperiam earum alias nisi aut corrupti, adipisci odit reprehenderit accusantium quos mollitia placeat maiores ducimus officiis non harum dolore nulla. Nesciunt eligendi dolorem molestias laudantium dicta blanditiis?
    </p>
           </div>
           </div>
    </div>
      )
}

export default AboutMe