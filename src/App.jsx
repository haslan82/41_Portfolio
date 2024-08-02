import { motion } from "framer-motion";
import Layout from "./components/Layout";




export default function App() {

  return (


    
    <Layout title={"Portfolio"} description={"My Portfolio"}>
      <motion.img 
      src="images/ball-1.svg" 
      alt="ball-1" 
      className="hidden md:block h-auto absolute top-48 right-10 z-[1]" 
      whileHover={{y:-10, rotate: 90, transition:{duration:0.4}}}
      drag
      dragConstraints={{top:0, left:0, right:0, bottom:0}}
      />
    
<motion.img 
      src="images/ball-2.svg" 
      alt="ball-2" 
      className="hidden md:block h-auto absolute bottom-10 left-10 z-[1]"
      whileHover={{y:-10, rotate: 90, transition:{duration:0.4}}}
      drag
      dragConstraints={{top:0, left:0, right:0, bottom:0}}
      />

    <h1 className="text-3xl font-bold underline text-blue-500">
      Hello world!
    </h1>

    </Layout>
  )
}