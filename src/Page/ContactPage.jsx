import React from 'react';
import {useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { motion } from 'framer-motion';

const ContactPage = () => {
  useEffect(()=>{
    AOS.init({
    mirror: false,
    duration: 1000,
    once: true,
  });
  }, [])
  // Animation variants for the form
  const formVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for the input fields
  const inputVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="contact-page" style={{ padding: '20px', 

maxWidth: '600px', margin: 'auto' }}>

      <motion.form
        variants={formVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ display: 'flex', flexDirection: 'column', gap: 

'15px', marginTop: '120px'}}
      >
        <motion.input
          type="text"
          placeholder="Your Name"
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ padding: '10px', borderRadius: '5px', 

border: '1px solid #ccc' }}
          className='input'
        />
          <motion.input
          type="number"
          placeholder="Your Phone"
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ padding: '10px', borderRadius: '5px', 

border: '1px solid #ccc' }}
          className='input'
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ padding: '10px', borderRadius: '5px', 

border: '1px solid #ccc' }}
          className='input'
        />
          <motion.input
          type="number"
          placeholder="Your Age"
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ padding: '10px', borderRadius: '5px', 

border: '1px solid #ccc' }}
          className='input'
        />
        <motion.textarea
          placeholder="Your Message"
          rows="4"
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ padding: '10px', borderRadius: '5px', 

border: '1px solid #ccc' }}
          className='input'
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          style={{ padding: '10px', borderRadius: '5px', 

border: 'none', backgroundColor: 'green', color: '#fff', 

cursor: 'pointer' }}
        >Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactPage;
