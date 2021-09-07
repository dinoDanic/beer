import React from "react";
import Image from "next/image";
import styles from "../styles/ShadowBottle.module.css";
import shadowBottleImage from "../public/img/shadowBottle.svg";
import beerImage from "../public/img/beer1-shadow.png";

const ShadowBottle = () => {
  return (
    <div className={styles.shadowBottle}>
      <div className={styles.bottle}>
        <Image src={beerImage} alt="beer" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default ShadowBottle;
