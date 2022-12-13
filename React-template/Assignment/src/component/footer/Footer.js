import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import { AiFillContacts } from 'react-icons/ai'
import { BiPhoneCall } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"
import usman from '../../assents/pics/usman.jfif'

const Footer = () => {
  return (
    <>
      <Container fluid style={{ marginTop: "50px" }}>

        <Row style={{ backgroundColor: '#80ced6' }}>
          <h1>CONTACT:</h1>
          <Col md={3} lg={3}>
            <AiFillContacts size={70} style={{ marginLeft: '25%',  marginTop: '20px' }} />
            <h3>Muhammad Usman</h3>

          </Col>
          <Col md={3} lg={3} >
            <BiPhoneCall size={70} style={{ marginLeft: '25%', marginTop: '20px' }} />
            <h2>Cell:+923067052683</h2>

          </Col>
          <Col md={3} lg={3} >
            <AiOutlineMail size={70} style={{ marginLeft: '25%', marginTop: '20px' }} />
            <h2>email:</h2><h3>mohammadusman7864@gmail.com</h3>
          </Col>
          <Col md={3} lg={3} >
            <img src={usman} alt="usman" style={{ marginLeft: '25%', marginTop: '20px' }} className="A" />
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default Footer;