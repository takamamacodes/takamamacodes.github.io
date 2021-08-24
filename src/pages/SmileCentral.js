// Third Party Utilities
import axios from 'axios'

// Third Party Components
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

// Local Components
import AboutBar from '../components/AboutBar'

class SmileCentralPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dogImage: null};
    this.updateDogImage = this.updateDogImage.bind(this);
  }

  updateDogImage() {
    axios.get("https://dog.ceo/api/breeds/image/random")
      .then(res => {
        debugger;
        const dogImage = res.data.message;
        this.setState({dogImage})
      })
  }

  componentDidMount() {
    this.updateDogImage();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <Row>
              <h2>Just some content to make you smile</h2>
              <p>Click on the image to replace it with a new one of another cute puppy</p>
            </Row>
            <Row>
              <div className="w-75">
                <Image fluid src={this.state.dogImage} thumbnail onClick={this.updateDogImage}/>
              </div>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <AboutBar />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SmileCentralPage