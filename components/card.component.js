import React from "react";
import styles from "../styles/Card.module.scss";
import Image from "next/image";
import beerShadowImage from "../public/img/beer1-shadow.png";
import { motion } from "framer-motion";

const Card = () => {
  const wrapAnimation = {
    hover: { scale: 0.95, boxShadow: "none" },
    whileTap: { scale: 0.9 },
  };
  const imageAnimation = {
    hover: { scale: 1.25 },
    whileTap: { scale: 1.15 },
  };
  const infoAnimation = {
    hover: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="whileTap"
    >
      <motion.div className={styles.wrap} variants={wrapAnimation}>
        <motion.div className={styles.image} variants={imageAnimation}>
          <Image
            src={beerShadowImage}
            alt="beer"
            layout="fill"
            objectFit="contain"
            quality="100"
          />
        </motion.div>
        <motion.div className={styles.info} variants={infoAnimation}>
          <h6>Pils Svijetlo</h6>
          <h6>12,00 kn</h6>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
