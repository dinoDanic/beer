import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Image from "next/image";
import beerImage from "../../../public/img/beer1-shadow.png";
import styles from "../../../styles/product.module.scss";
import { ArrowLeftCircle, PlusCircle, DashCircle } from "react-bootstrap-icons";

const Product = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <div className={styles.image}>
          <Image
            src={beerImage}
            alt="beer image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <Row>
          <Col lg="8">
            <div className={styles.back}>
              <ArrowLeftCircle />
              <p>back to products</p>
            </div>
            <div className={styles.title}>
              <h3>Plis Svijeto lager pivo</h3>
            </div>
            <div className={styles.desc}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque cumque libero laboriosam harum rem in illum rerum. Id
                voluptatum voluptatem incidunt iste temporibus facilis
                laboriosam optio molestias, natus nisi repellendus.
              </p>
            </div>
            <div className={styles.fnsBar}>
              <div className={styles.fns}>
                <DashCircle size={25} />
                <div className={styles.howMuch}>1</div>
                <PlusCircle size={25} />
              </div>
              <div className={styles.price}>
                <h5>12,00 kn</h5>
              </div>
            </div>
            <Button>Add to cart</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Product;
