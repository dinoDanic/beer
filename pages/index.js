import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

import Card from "../components/card.component";
import { motion } from "framer-motion";

export default function Home() {
  const itemAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <motion.div initial="initial" animate="animate" className={styles.wrap}>
      <Container>
        <Row>
          <Col md="2">
            <h3>Select your beer</h3>
          </Col>
          <Col md="10">
            <Row>
              <Link href="/product/123" passHref>
                <Col md="3">
                  <motion.div
                    variants={itemAnimation}
                    initial="initial"
                    animate="animate"
                    transition="transition"
                    className={styles.item}
                  >
                    <Card />
                  </motion.div>
                </Col>
              </Link>
              <Link href="/product/123" passHref>
                <Col md="3">
                  <motion.div variants={itemAnimation} className={styles.item}>
                    <Card />
                  </motion.div>
                </Col>
              </Link>
              <Link href="/product/123" passHref>
                <Col md="3">
                  <motion.div
                    variants={itemAnimation}
                    initial="initial"
                    animate="animate"
                    transition="transition"
                    className={styles.item}
                  >
                    <Card />
                  </motion.div>
                </Col>
              </Link>
              <Link href="/product/123" passHref>
                <Col md="3">
                  <motion.div
                    variants={itemAnimation}
                    initial="initial"
                    animate="animate"
                    transition="transition"
                    className={styles.item}
                  >
                    <Card />
                  </motion.div>
                </Col>
              </Link>
            </Row>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}
