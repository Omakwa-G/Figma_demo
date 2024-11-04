import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { fadeIn } from "../Utils/Motion";
import { product } from "../Constant";
import { useLocation, useParams } from "react-router-dom";


const Product = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} id="projects" className="flex flex-col items-center mt-40 md:mt- justify-center">
      <h2 className="font-bold text-center lg:text-[48px] sm:text-[35px] xs:text-[30px] text-[32px] lg:leading-[40px]">Figma Products</h2>
      <p className="flex items-center justify-center text-justify w-[80%] mt-8 text-[20px] max-w-3xl leading-[30px]">These are figma products I.e what Figma Land deals in. This is solely based on the concept of graphics editing and the tools(mostly softwares) which can be used to carry out that foreseen goal(s). </p>

      <div className="mt-20 flex flex-wrap gap-12 items-center justify-center xl:grid grid-cols-3 ">
        {product.map((product, index) => (
          <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            animate={controls}
            initial="hidden"
            className="project-card py-[3px] rounded-[15px]" key={product.name}
          >
            <motion.div className="relative rounded-2xl w-[330px] lg:w-[350px] lg:h-[550px] h-[500px] p-4 bg-[#87cfeb27]" >
              <img src={product.image} alt="" className="w-full rounded-2xl object-cover" />
              <p className="font-bold text-[24px]">{product.name}</p>
              <p className="mt-2 text-[15px]">{product.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Product;