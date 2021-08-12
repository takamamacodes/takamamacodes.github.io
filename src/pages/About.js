// Third Party Components
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Local Components
import AboutBar from '../components/AboutBar'

class AboutPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={8}>
            This is my awesome about page
          </Col>
          <Col xs={12} md={4}>
            <AboutBar />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutPage