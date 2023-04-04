import React from "react";
import { useNavigate } from "react-router-dom";
import { About, Description, Image } from "../styles";
import { motion } from "framer-motion";
import { fade, photoAnimation, titleAnimation } from "../animation";

const AboutSection = () => {
  let history = useNavigate();

  const redirectHandler = () => {
    history("/contact");
  };

  return (
    <About>
      <Description>
        <motion.h2 variants={titleAnimation}>Tiago Duarte</motion.h2>
        <motion.h2 variants={titleAnimation}>
          Desenvolvedor de sistemas
        </motion.h2>
        <motion.p variants={fade}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </motion.p>

        <button onClick={redirectHandler}>Contato</button>
      </Description>
      <Image>
        <motion.div variants={photoAnimation}>
          <img src="http://lorempixel.com.br/500/400/?2"></img>
        </motion.div>
      </Image>
    </About>
  );
};
export default AboutSection;
