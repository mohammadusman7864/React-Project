import React from "react";
import NavBar from "../../component/navBar/NavBar";
import "../home/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assents/pics/Logo.png";
import headerPlate1 from "../../assents/pics/Place Your Image2 .png";
import headerPlate2 from "../../assents/pics/Place Your Image3.png";
import headerLeaves from "../../assents/pics/Place1.png";
import plate1 from "../../assents/pics/plate1.png";
import plate2 from "../../assents/pics/plate2.png";
import plate3 from "../../assents/pics/plate3.png";
import Button from "../../component/button/Button";
import Rectangle from "../../assents/pics/Rectangle_.jpg";
import Pizza from "../../assents/pics/pizza.png";
import Pizza2 from "../../assents/pics/pizza2.png";
import leaves2 from "../../assents/pics/leaves2.png";
import leaves3 from "../../assents/pics/leaves3.png";
import "../../component/button/Button.css";



const Home = () => {
  return (
    <>
      <div className="backgroundPics">
        <NavBar />
        <Container>
          <Row>
            <Col md={2} sm={12} lg={2}>
              <img src={logo} alt="" className="logo" />
            </Col>
          </Row>
          
          <Row className="header-section">
            <Col md={6} sm={12} lg={6}>
              <h1 className="header-hinding">Italian Food</h1>
            </Col>
            <Col md={6} sm={12} lg={6} className="Header-plate">
              <img src={headerPlate1} alt="" className="header-plate" />
            </Col>
            <Col md={6} sm={12} lg={6}>
              <p className="header-text">Loremipsum dolor</p>
            </Col>

            <Col md={6} sm={12} lg={6}>
              <Button name="READ MORE" className="header-button" />
            </Col>
            <Col md={6} sm={12} lg={6} className="header-paragraph">
              <p className="header-para">
                Lorem ipsum dolor sit amet, consectetur adipi- <br />
                sicing elit. Officia et vitae non enim perspiciatis <br /> culpa
                beatae quam.
              </p>
            </Col>
            <Col md={6} sm={12} lg={6} className="Header-plate2">
              <img src={headerPlate2} alt="" className="header-plate2" />
            </Col>

            <Col md={6} sm={12} lg={6} className="Header-leaves">
              <img src={headerLeaves} alt="" className="header-leaves" />
            </Col>
          </Row>
        </Container>
        </div>
        <Container>
          <Row>
            <Col>
              <h1 className="lorem-hinding">Lorem ipsum dolor</h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="lorem-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Possimus ratione aperiam explicabo mollitia.
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={4} sm={12} lg={4}>
              <img src={plate1} alt="" className="three-plate" />
              <h3 className="plate-hinding">Lorem Ipsum</h3>
              <p className="plate-para">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipisi-
              </p>
            </Col>

            <Col md={4} sm={12} lg={4}>
              <img src={plate2} alt="" className="three-plate" />
              <h3 className="plate-hinding">Lorem Ipsum</h3>
              <p className="plate-para">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipisi-
              </p>
            </Col>

            <Col md={4} sm={12} lg={4}>
              <img src={plate3} alt="" className="three-plate" />
              <h3 className="plate-hinding">Lorem Ipsum</h3>
              <p className="plate-para">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipisi-
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button name="SHOW MORE" className="plate-btn" />
            </Col>
          </Row>
        </Container>
      

      <div className="backgroundColor-info">
        <Container>
          <Row>
            <Col>
              <h1 className="info-hinding">Lorem ipsum dolor</h1>
            </Col>
          </Row>

          <Row>
            <Col lg={6} md={6} sm={12}>
              <p className="info-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ipsam mollitia nobis et neque adipisci deleniti vero
                nostrum odio nesciunt. Incidunt dolores tempora ab impedit
                deserunt nesciunt quidem ducimus ex repellendus eveniet nam sunt
                beatae non voluptatibus.
              </p>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <p className="info-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ipsam mollitia nobis et neque adipisci deleniti vero
                nostrum odio nesciunt. Incidunt dolores tempora ab impedit
                deserunt nesciunt quidem nam sunt beatae non odio voluptatibus.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button name="MORE INFO" className="info-btn" />
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <img src={plate3} alt="" className="discount-plate" />
          </Col>

          <Col lg={6} md={6} sm={12}>
            <h1 className="discount-hinding">
              Discount up to <br /> 50% All Excursions{" "}
            </h1>
            <p className="discount-txt">
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
              Atque minima <br />
              quas. Minima perspiciatis praesentium et <br /> aut quos excepturi
              sint iste impedit fugit.
            </p>
            <Button name="READ MORE" className="discount-btn" />
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={6} sm={12}>
            <h1 className="discount-hinding2">
              January's Promos: <br /> Buy 1 Get 1 Free!{" "}
            </h1>
            <p className="discount-txt2">
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
              Atque minima <br />
              quas. Minima perspiciatis praesentium et <br /> aut quos excepturi
              sint iste impedit fugit.
            </p>
            <Button name="READ MORE" className="discount-btn2" />
          </Col>

          <Col lg={6} md={6} sm={12}>
            <img src={plate2} alt="" className="discount-plate2" />
          </Col>
        </Row>
      </Container>

      <div className="backgroundPics-pizza">
        <div>
          <img src={leaves2} alt="" className="leaves2" />
        </div>
        <Container>
          <Row>
            <Col>
              <h1 className="pizza-hinding">Lorem ipsum dolor sit amet</h1>
              <p className="pizza-txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                Non architecto nihil distinctio asperiores harum enim.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={Rectangle} alt="" className="Rectangle" />
            </Col>
          </Row>

          <Row>
            <Col lg={4} md={4} sm={6}>
              <img src={Pizza2} alt="" className="pizza2" />
            </Col>
            <Col lg={8} md={8} sm={6}>
              <img src={Pizza} alt="" className="pizza" />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={4} md={4} sm={12}>
              <h1 className="about-hinding">Lorem ipsum</h1>
              <p className="about-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat omnis vel corrupti rem tenetur ea odio.
              </p>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <h1 className="about-hinding">Lorem ipsum</h1>
              <p className="about-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat omnis vel corrupti rem tenetur ea odio.
              </p>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <h1 className="about-hinding">Lorem ipsum</h1>
              <p className="about-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat omnis vel corrupti rem tenetur ea odio.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="about-txt2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit,
                Recusandae esse <br />
                sequi adipisci quo provident cum commodi minus laboriosam qui{" "}
                <br /> eligendi voluptatibus exercitationem.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="about-txt3">Lorem Ipsum</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="backgroundColor-title">
        <div>
          <img src={leaves3} alt="" className="leaves3" />
        </div>
        <Container>
          <Row>
            <Col>
              <h1 className="title-hinding">Title Here</h1>
              <p className="title-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam <br />
                doloremque quod similique atque maiores.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="input-section">
              <input
                className="input-inner-section"
                type="text"
                placeholder="Your Email"
              />
              <Button name="SUBCRIBE" className="input-btn" />
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <h5 className="footer-hinding">Title Here</h5>
            <p className="footer-text">
              Lorem, ipsum dolor sit amet, consectetur adipisicing elit. <br />
              Eligendi enim reiciendis sunt temporibus inventore <br /> modi
              fugit Maiores eligendi praesentium necessita- <br /> tibus esse
              earum at illum eum exercitationem.
            </p>
          </Col>
          <Col lg={2} md={2} sm={12}>
            <h5 className="footer-hinding">About</h5>
            <p className="footer-text"> History </p>
            <p className="footer-texts">Our Team</p>
            <p className="footer-texts">Brand Guidelines</p>
            <p className="footer-texts">Terms& Conditions</p>
            <p className="footer-texts">Privacy Policy</p>
          </Col>
          <Col lg={2} md={2} sm={12}>
            <h5 className="footer-hinding">Services</h5>
            <p className="footer-text"> How to Order </p>
            <p className="footer-texts">Our Product</p>
            <p className="footer-texts">Order Status</p>
            <p className="footer-texts">Promo</p>
            <p className="footer-texts">Payment Method</p>
          </Col>
          <Col lg={2} md={2} sm={12}>
            <h5 className="footer-hinding">Other</h5>
            <p className="footer-text"> Contact Us</p>
            <p className="footer-texts">Help Us</p>
            <p className="footer-texts">Privacy</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
