import { motion } from "framer-motion";
import Layout from "../components/Layout";
import React from "react";
import Typing from 'react-typing-effect';

import GithubIcon from "../components/icons/Github.jsx";
import TwitterIcon from "../components/icons/Twitter.jsx";
import LinkedinIcon from "../components/icons/Linkedin.jsx";
/* import TwitterIcon from "../components/icons/Twitter.jsx";
import LinkedinIcon from "../components/icons/Linkedin.jsx"; */




const TypingAnimation = React.memo(
  ()=>{
    return(
     <Typing 
     loop={3}
     wrapper="p"
     steps={[
      "Frontend Developer",
      2000,
      "React Developer",
      2000,
      "Software Developer 🧑🏻‍💻 ⚙️ 🛠️ ⚒️",
      2000,
      

     ]}
     
     />
    )
  },
  (props, prevProps)=> true
)

export default function App() {

  return (
    <Layout title={"Portfolio"} description={"My Portfolio"}>
      <motion.img 
      src="images/ball-1.svg" 
      alt="ball-1" 
      className="cursor-pointer hidden md:block h-auto absolute top-48 right-10 z-[1]" 
      whileHover={{y:-10, rotate: 90, transition:{duration:0.4}}}
      drag
      dragConstraints={{top:0, left:0, right:0, bottom:0}}
      />
<motion.img 
      src="images/ball-2.svg" 
      alt="ball-2" 
      className="cursor-pointer hidden md:block h-auto absolute bottom-10 left-10 z-[1]"
      whileHover={{y:-10, rotate: 90, transition:{duration:0.4}}}
      drag
      dragConstraints={{top:0, left:0, right:0, bottom:0}}
      />
<main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello,</span> I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
              Hüseyin ASLAN</h1>
              <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r frpm-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
                <TypingAnimation/>
              </div>
{/* social Accounts */}
<div className="flex items-center mt-8 space-x-6 md:mt-4 ">
<motion.a href = "https://github.com/haslan82" target={"_blank"} rel="noopener noreferrer"
 className="flex items-center justify-center text-gray-800 transition-colors *:duration-300
 dark:text-gray-100 dark:hover:text-pinkish-200 hover: text-pinkish-200"
 whileHover={{scale:1.2}}
 >
<GithubIcon className={"w-8 h-8 fill-current"} />
</motion.a>

<motion.a href = "https://www.linkedin.com/in/h%C3%BCseyin-aslan-128519203/" target={"_blank"} rel="noopener noreferrer"
 className="flex items-center justify-center text-gray-800 transition-colors *:duration-300
 dark:text-gray-100 dark:hover:text-pinkish-200 hover: text-pinkish-200"
 whileHover={{scale:1.2}}
 >
<LinkedinIcon className={"w-8 h-8 fill-current"} />
</motion.a>


<motion.a href = "https://x.com/huseyinaslan82" target={"_blank"} rel="noopener noreferrer"
 className="flex items-center justify-center text-gray-800 transition-colors *:duration-300
 dark:text-gray-100 dark:hover:text-pinkish-200 hover: text-pinkish-200"
 whileHover={{scale:1.2}}
 >
<TwitterIcon className={"w-8 h-8 fill-current"} />
</motion.a>


</div>




    </div>
    </section>
    </main>
    </Layout>
  )
}