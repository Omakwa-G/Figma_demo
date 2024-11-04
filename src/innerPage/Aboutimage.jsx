import { aboutimage } from "../Constant";
import { motion } from "framer-motion"
import { fadeIn } from "../Utils/Motion";

const Aboutimage = () => {
  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    viewport={{once:true, amount:0.25}}
    className='aboutvision flex mt-[200px] font-sans  flex-col p-[65px 50px] gap-14 justify-center items-center'>
        {aboutimage.map((aboutimage, index) => (
          <motion.img 
          variants={fadeIn("right", "spring", index * 0.3, 1)} 
          src={aboutimage.icon} 
          key={index} alt=""
           />
        ))}
        </motion.div>
  )
}

export default Aboutimage
