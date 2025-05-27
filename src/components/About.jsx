import React from "react";
import { Tilt } from 'react-tilt';

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from 'react';

import "./custom.css"

const ServiceCard = ({ index, title, afterFlipped, icon }) => {
  const [flipped, setFlipped] = useState(false); // Track if the card is flipped

  const handleClick = () => {
    setFlipped(!flipped); // Toggle the flipped state on card click
  };

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          onClick={handleClick}
          className={`${flipped ? 'rotate-y-180' : ''
            } card-container bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transition-transform duration-500`}
        >
          <div className={`card front ${flipped ? 'hidden' : ''}`}>
            <img
              src={icon}
              alt='web-development'
              className='w-20 h-20 object-contain'
            />
            <h3 className='text-white text-[25px] font-bold text-center'>{title}</h3>
          </div>

          {/* Back side of the card */}
          <div className={`card back ${flipped ? 'block' : 'hidden'} flex justify-center items-center text-center text-white bg-gray-800 rounded-[20px] p-5`}>
            {/* Displaying technologies as a list after the card is flipped */}
            {afterFlipped && (
              <ul className="list-disc text-lg space-y-2">
                {afterFlipped.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div variants={textVariant()}>
        <h2>Innovative Apigee Developer | API Management Specialist | Tech Enthusiast<br className='sm:block hidden' /></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

        I'm a seasoned Apigee developer with 5+ years of experience designing, developing, and troubleshooting APIs
        using Apigee Edge, X, and Hybrid.  My expertise spans policy configuration, shared flow creation, web services
        transformation, and GCP integration (Pub/Sub, Cloud Functions) with Node.js and Python. I'm passionate about
        building innovative solutions that drive business growth.  Currently exploring the exciting worlds of Machine
        Learning, AI, and DevOps.
      </motion.p>

      <motion.div variants={textVariant()}>
        <h2></h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} afterFlipped={service.afterFlipped} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
