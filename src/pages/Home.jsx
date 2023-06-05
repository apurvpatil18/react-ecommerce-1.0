import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

import counterImg from "../assets/images/outdoor-livingwall01.jpg";
import counterImg1 from "../assets/images/circle-shape-greenwall01.jpg";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const year = new Date().getFullYear();
  useEffect(() => {
    const fillteredTrendingProducts = products.filter(
      (item) => item.category === "Stand"
    );

    const fillteredBestSalesProducts = products.filter(
      (item) => item.category === "Stand"
    );

    setTrendingProducts(fillteredTrendingProducts);
    setBestSalesProducts(fillteredBestSalesProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6 ">
              <div className="hero_content">
                <p className="hero_subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern </h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quaret nulla repellat quo eaque alias corporis sunt, facilis
                  nesciunt rem fugit!
                </p>
                <motion.button whileTap={{ sale: 1.2 }} className="buy_btn">
                  <Link to="shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="tending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count_down-col">
              <div className="clock_top-content">
                <h1 className="text-white fs-8 mb-4">
                  Take a breath of fresh air...
                </h1>
                <h3 className="text-white fs-10 mb-5">Quality Living Wall</h3>
              </div>

              <motion.button
                whileTap={{ scale: 0.9 }}
                className="buy_btn store_btn"
              >
                <Link to="/Shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter_img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <div className="clock_top-content">
                <h2 className="section_title">Our Projects</h2>
              </div>
            </Col>
            <Col lg="6" md="6" className="text-end">
              <img src={counterImg1} alt="" />
            </Col>
            {/* <ProductsList data={bestSalesProducts} /> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
