import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from '../Images/arrow.png';
import bullet from '../Images/bullet.png';
import arrowtwo from '../Images/arrowtwo.png';
import bullettwo from '../Images/bullettwo.png';
import arrowthree from '../Images/arrowthree.png';
import bulletthree from '../Images/bulletthree.png';
import arrowfour from '../Images/arrowfour.png';
import bulletfour from '../Images/bulletfour.png';

const ComponentOne = () => {
  const headingStyles = {
    position: 'absolute',
    width: '601px',
    height: '50px',
    left: '420px',
    top: '814px',
    fontFamily: 'Rubik',
    fontStyle:'normal' ,
    fontWeight:700 ,
    fontSize:'40px' ,
    lineHeight: '50px',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#0A1C1F',
  };
  const textStyle = {
    position: 'absolute',
    width: '432px',
    height: '24px',
    left: '504px',
    top: '884px',
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '24px',
    textAlign: 'center',
    color: '#0A1C1F',
    opacity: 0.5,
  };
  const boxStyles= {
    position: 'absolute',
    width: '270px',
    height: '254px',
    left: '136px',
    top: '944px',
    background:'#2D69F0',
    boxShadow: '0px 0px 20px rgba(119, 119, 119, 0.1)',
    borderRadius: '8px',
  };

  const boxStyles2= {
    position: 'absolute',
    width: '270px',
    height: '254px',
    left: '436px',
    top: '944px',
    background:'#DD246E',
    boxShadow: '0px 0px 20px rgba(119, 119, 119, 0.1)',
    borderRadius: '8px',
  };

  const boxStyles3={
    position: 'absolute',
    width: '270px',
    height: '254px',
    left: '736px',
    top: '944px',
    background: '#6759FF',
    boxShadow: '0px 0px 20px rgba(119, 119, 119, 0.1)',
    borderRadius: '8px',
  };

  const boxStyles4={
    position: 'absolute',
    width: '270px',
    height: '254px',
    left: '1035px',
    top: '944px',
    background: '#0CAE74',
    boxShadow: '0px 0px 20px rgba(119, 119, 119, 0.1)',
    borderRadius: '8px',
  };


  
  return (
    <Container>
      <Row>
        <Col>
         <h1 style={headingStyles}> Why To Choose <span style={{color: '#6759FF'}}>Laundry Shop</span>? </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-muted" style={textStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </Col>
      </Row>
      <Row>
         <Col>
         <div className="box" style={boxStyles}>
         <div className="feature-container">
          <br></br>
          
          <img src={bullet} alt="Logo 1" className="logo" style={{ float: 'left' }} />
          <br></br>
          <h1 style={{ color: 'white', fontSize: '32px', marginLeft: '10px' ,marginRight: '5px'}}>Feature Name</h1>

          <br></br>
        </div>
        <p1 style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p1>
        <br></br>
        <br></br>
        <div>
          <span className="text" style={{ color: 'white' }}>Know More</span>
          <span className="icon">
          <img src={arrow} alt="arrow" />
          </span>
         </div>
         </div>
         </Col>
      </Row>


      <Row>
         <Col>
         <div className="box" style={boxStyles2}>
         <div className="feature-container">
          <br></br>
          <img src={bullettwo} alt="Logo 2" className="logo" style={{ float: 'left' }} />
          <br></br>
          <h1 style={{ color: 'white', fontSize: '32px' }}>Feature Name</h1>
          <br></br>
        </div>
        <p1 style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p1>
        <br></br>
        <br></br>
        <div>
          <span className="text" style={{ color: 'white' }}>Know More</span>
          <span className="icon">
          <img src={arrowtwo} alt="arrowtwo" />
          </span>
         </div>
         </div>
         </Col>
      </Row>
      <Row>
         <Col>
         <div className="box" style={boxStyles3}>
         <div className="feature-container">
          <br></br>
          <img src={bulletthree} alt="Logo 3" className="logo" style={{ float: 'left' }} />
          <br></br>
          <h1 style={{ color: 'white', fontSize: '32px' }}>Feature Name</h1>
          <br></br>
        </div>
        <p1 style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p1>
        <br></br>
        <br></br>
        <div>
          <span className="text" style={{ color: 'white' }}>Know More</span>
          <span className="icon">
          <img src={arrowthree} alt="arrowthree" />
          </span>
         </div>
         </div>
         </Col>
      </Row>

      <Row>
         <Col>
         <div className="box" style={boxStyles4}>
         <div className="feature-container">
         <br></br>
          <img src={bulletfour} alt="Logo 4" className="logo" style={{ float: 'left' }} />
          <br></br>
          <h1 style={{ color: 'white', fontSize: '32px' }}>Feature Name</h1>
          <br></br>
        </div>
        <p1 style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p1>
        <br></br>
        <br></br>
        <div>
          <span className="text" style={{ color: 'white' }}>Know More</span>
          <span className="icon">
          <img src={arrowfour} alt="arrowfour" />
          </span>
         </div>
         </div>
         </Col>
      </Row>
    </Container>
  );
};

export default ComponentOne;
