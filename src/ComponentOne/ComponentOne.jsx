import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from '../images/arrow.png';
import bullet from '../images/bullet.png';
import arrowtwo from '../images/arrowtwo.png';
import bullettwo from '../images/bullettwo.png';
import arrowthree from '../images/arrowthree.png';
import bulletthree from '../images/bulletthree.png';
import arrowfour from '../images/arrowfour.png';
import bulletfour from '../images/bulletfour.png';

const ComponentOne = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const headingStyles = {
    width: '601px',
    height: '50px',
    left: '420px',
    top: '814px',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '50px',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#0A1C1F',
  };

  const textStyle = {
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

  const boxStyles = {
    width: '270px',
    height: '254px',
    background: '#2D69F0',
    boxShadow: '0px 0px 20px rgba(119, 119, 119, 0.1)',
    borderRadius: '8px',
  };

  const boxStyles2 = {
    width: '270px',
    height: '254px',
    background: '#DD246E',
    boxShadow: '0px 0px 20px rgba(119, 119, 119, 0.1)',
    borderRadius: '8px',
  };

  const boxStyles3 = {
    width: '270px',
    height: '254px',
    background: '#6759FF',
    boxShadow: '0px 0px 20px rgba(119, 119, 119, 0.1)',
    borderRadius: '8px',
  };

  const boxStyles4 = {
    width: '270px',
    height: '254px',
    background: '#0CAE74',
    boxShadow: '0px 0px 20px rgba(119, 119, 119, 0.1)',
    borderRadius: '8px',
  };

  const handleSlideSelect = (selectedIndex) => {
    setActiveSlide(selectedIndex);
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 style={{ float: 'middle' }}>
            Why To Choose <span style={{ color: '#6759FF' }}>Laundry Shop</span>?
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p className="text-muted" style={textStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="d-none d-md-block">
          {/* Web View */}
          <Row>
            <Col md={3}>
              <div className="box" style={boxStyles}>
                <div className="feature-container">
                  <br />
                  <img src={bullet} alt="Logo 1" className="logo" style={{ float: 'left' }} />
                  <br />
                  <h1 style={{ color: 'white', fontSize: '32px', marginLeft: '10px', marginRight: '5px' }}>
                    Feature Name
                  </h1>
                  <br />
                </div>
                <p1 style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p1>
                <br />
                <br />
                <div>
                  <span className="text" style={{ color: 'white' }}>
                    Know More
                  </span>
                  <span className="icon">
                    <img src={arrow} alt="arrow" />
                  </span>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="box" style={boxStyles2}>
                <div className="feature-container">
                  <br />
                  <img src={bullettwo} alt="Logo 2" className="logo" style={{ float: 'left' }} />
                  <br />
                  <h1 style={{ color: 'white', fontSize: '32px' }}>Feature Name</h1>
                  <br />
                </div>
                <p1 style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p1>
                <br />
                <br />
                <div>
                  <span className="text" style={{ color: 'white' }}>
                    Know More
                  </span>
                  <span className="icon">
                    <img src={arrowtwo} alt="arrowtwo" />
                  </span>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="box" style={boxStyles3}>
                <div className="feature-container">
                  <br />
                  <img src={bulletthree} alt="Logo 3" className="logo" style={{ float: 'left' }} />
                  <br />
                  <h1 style={{ color: 'white', fontSize: '32px' }}>Feature Name</h1>
                  <br />
                </div>
                <p1 style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p1>
                <br />
                <br />
                <div>
                  <span className="text" style={{ color: 'white' }}>
                    Know More
                  </span>
                  <span className="icon">
                    <img src={arrowthree} alt="arrowthree" />
                  </span>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="box" style={boxStyles4}>
                <div className="feature-container">
                  <br />
                  <img src={bulletfour} alt="Logo 4" className="logo" style={{ float: 'left' }} />
                  <br />
                  <h1 style={{ color: 'white', fontSize: '32px' }}>Feature Name</h1>
                  <br />
                </div>
                <p1 style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p1>
                <br />
                <br />
                <div>
                  <span className="text" style={{ color: 'white' }}>
                    Know More
                  </span>
                  <span className="icon">
                    <img src={arrowfour} alt="arrowfour" />
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={12} className="d-md-none">
          {/* Mobile View */}
          <Carousel activeIndex={activeSlide} onSelect={handleSlideSelect} interval={null}>
            <Carousel.Item>
              <div className="box" style={boxStyles}>
                <div className="feature-container">
                  <br />
                  <img src={bullet} alt="Logo 1" className="logo" style={{ float: 'left' }} />
                  <br />
                  <h1 style={{ color: 'white', fontSize: '32px', marginLeft: '10px', marginRight: '5px' }}>
                    Feature Name
                  </h1>
                  <br />
                </div>
                <p1 style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p1>
                <br />
                <br />
                <div>
                  <span className="text" style={{ color: 'white' }}>
                    Know More
                  </span>
                  <span className="icon">
                    <img src={arrow} alt="arrow" />
                  </span>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="box" style={boxStyles2}>
                <div className="feature-container">
                  <br />
                  <img src={bullettwo} alt="Logo 2" className="logo" style={{ float: 'left' }} />
                  <br />
                  <h1 style={{ color: 'white', fontSize: '32px' }}>Feature Name</h1>
                  <br />
                </div>
                <p1 style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p1>
                <br />
                <br />
                <div>
                  <span className="text" style={{ color: 'white' }}>
                    Know More
                  </span>
                  <span className="icon">
                    <img src={arrowtwo} alt="arrowtwo" />
                  </span>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="box" style={boxStyles3}>
                <div className="feature-container">
                  <br />
                  <img src={bulletthree} alt="Logo 3" className="logo" style={{ float: 'left' }} />
                  <br />
                  <h1 style={{ color: 'white', fontSize: '32px' }}>Feature Name</h1>
                  <br />
                </div>
                <p1 style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p1>
                <br />
                <br />
                <div>
                  <span className="text" style={{ color: 'white' }}>
                    Know More
                  </span>
                  <span className="icon">
                    <img src={arrowthree} alt="arrowthree" />
                  </span>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="box" style={boxStyles4}>
                <div className="feature-container">
                  <br />
                  <img src={bulletfour} alt="Logo 4" className="logo" style={{ float: 'left' }} />
                  <br />
                  <h1 style={{ color: 'white', fontSize: '32px' }}>Feature Name</h1>
                  <br />
                </div>
                <p1 style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p1>
                <br />
                <br />
                <div>
                  <span className="text" style={{ color: 'white' }}>
                    Know More
                  </span>
                  <span className="icon">
                    <img src={arrowfour} alt="arrowfour" />
                  </span>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ComponentOne;
