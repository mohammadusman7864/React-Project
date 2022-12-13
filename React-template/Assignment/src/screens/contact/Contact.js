import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import chef from '../../assents/pics/chef.jpg'
import chef2 from '../../assents/pics/chef2.jpg'
import Footer from '../../component/footer/Footer'
import NavBar from '../../component/navBar/NavBar'
import '../contact/Contact.css'

const Contact = () => {
  return (
    <>
    <NavBar/>
      <Container fluid style={{ marginTop: "50px" }}>
        <h1 className='ansari'>
          ANSARI PIZZA POINT
        </h1>

        <Row style={{ marginTop: "50px" }}>
          <Col md={8} >
            <br/> <br/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima labore repellat consectetur
              porro debitis dignissimos <br /> quam assumenda, repudiandae eos vero libero voluptatum error dolore magnam
              explicabo quae sequi officia alias?Lorem <br /> ipsum dolor sit, amet consectetur adipisicing elit. Unde repudiandae
              dolorum dolore perspiciatis, consectetur <br /> saepe sed deserunt culpa ullam harum.</p>
          </Col>
          <Col md={4}>
            <img src={chef} alt="chef" className='A' />
          </Col>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Col md={4}  >
            <img src={chef2} alt="chef" className='A' />
          </Col>
          <Col md={8}>
          <br/> <br/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima labore repellat consectetur
              porro debitis dignissimos <br /> quam assumenda, repudiandae eos vero libero voluptatum error dolore magnam
              explicabo quae sequi officia alias?Lorem <br /> ipsum dolor sit, amet consectetur adipisicing elit. Unde repudiandae
              dolorum dolore perspiciatis, consectetur <br /> saepe sed deserunt culpa ullam harum.</p>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  )
}

export default Contact