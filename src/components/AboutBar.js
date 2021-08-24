// Third Party Components
import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

// Local Media
import me_and_taka from '../media/me_and_taka.jpeg'

class AboutBar extends React.Component {
  render() {
    // Styling for links
    const iconLinkStyle =  {
      color: "inherit",
      marginRight: "5%",
      marginLeft: "5%"
    };

    const linkStyle = {
      textDecoration: "none"
    };

    const smallerText = {
      fontSize: "0.75rem"
    }

    return (
      <Container>
        <Row className="justify-content-md-center">
          <span className="text-center">
            <a href="mailto: wcomurray@gmail.com" style={iconLinkStyle}><FontAwesomeIcon icon={faAt} size="2x" /></a>
            <a href="https://www.linkedin.com/in/wei-ren-murray-bb9069184/" style={iconLinkStyle}><FontAwesomeIcon icon={faLinkedin} size="2x" href="" /></a>
            <a href="https://github.com/takamamacodes" style={iconLinkStyle}><FontAwesomeIcon icon={faGithub} size="2x" href="" /></a>
            <a href="https://www.facebook.com/weirenmurray" style={iconLinkStyle}><FontAwesomeIcon icon={faFacebook} size="2x" href="" /></a>
          </span>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={10}>
            <Image src={me_and_taka} thumbnail />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <h4 className="text-center">Hi, I'm Wei-ren</h4>
        </Row>
        <Row>
          <p className="text-center" style={smallerText}>Welcome! I'm a software engineer at <a href="htts://sei.cmu.edu" style={linkStyle}>Carnegie Mellon Unveristy Software Engineering Institute</a> who likes to spend her free time exploring with her dog, reading, and learning new things!</p>
          <p className="text-center" style={smallerText}>I'm based in Pittsburgh, PA, but I have roots in Falmouth, MA and my dream is to eventually live the <a href="https://www.urbandictionary.com/define.php?term=van+life" style={linkStyle}>#vanlife</a> and show my dog the world.</p>
        </Row>
      </Container>
    );
  }
}

export default AboutBar