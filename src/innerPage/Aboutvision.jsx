import { motion } from "framer-motion"
import { textVariant, staggerContainer, fadeIn, zoomIn} from "../Utils/Motion"



function Aboutvision() {
    return (
      <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{once:true, amount:0.25}}
       className='flex mt-[200px] font-sans  flex-col p-[65px 50px] gap-14 justify-center items-center'>
        <motion.p variants={zoomIn(.2, .5)} className=" xs:mt-[10px] sm:mt-[10px] text-center md:mt-3 text-[20px] sm:w-[411px] sm:h-[90px] flex items-center leading-[30px] tracking-[0.2px] md:w-[700px] md:h-[60px] p-[20px] pl-[30px]">Figma acquisition originally founded by Dylan Field and Evan Wallace in the year 2012
            is a web-based vector graphics editing software company, with a platform equipped with calenders to help not only freelancers
            but other users to meet their acquired goals.
            Figma Land has recorded quite an impressive list of achievements leading to the testimonials of that have been included
            on the home page.
        </motion.p>
        </motion.div>
      
    )
  }
  
export default Aboutvision
