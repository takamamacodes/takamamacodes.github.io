// Third Party Components
import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Local Media
import family_photo from '../media/family_photo.jpeg'

class HomePage extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6} md={4}>
            <h1 class="text-center">Welcome</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={6} md={4}>
            <Image src={family_photo} thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <h3 class="text-center">Thanks for taking a look</h3>
            <p class="text-justify">To the left you'll see me holding the namesake of my GitHub handle. Taka is a 1.5 year old goldendoodle and my fur-baby. He is 60 pounds of love (and also mischief) and he never fails to brighten every day!</p>
            <p class="text-justify">Bringing Taka into my life in the midst of COVID-19 was one of the biggest changes I have ever experienced. Just learning to be 100% responsible for the wellbeing of another creature is an enormous thing. One that I am always so impressed others handle with such grace. But besides being a typical puppy with typical puppy antics, Taka is one of many "pandemic puppies" with separation anxiety. Because I spend a <b>lot</b> of time at home, I thought it would be fun to brush up on my technical skills and try my hand at building a personal website. Tadah!</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage