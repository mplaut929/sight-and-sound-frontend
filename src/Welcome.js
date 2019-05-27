import React, { Component } from 'react'
import { Button, Image, Container, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';




class Welcome extends Component {


  render(){
    return (
        <div>
          <Container id="imageContainer">
            <Image id="image" src='/Logo.png' fluid/>
          </Container>
          <Container id="buttonContainer">
            <div className="textAnimation">
              <div className='welcome'>Welcome</div>
              <div className='welcome'>
                <span>to Sight & Sound!</span>
              </div>
            </div>
            <h2>Who's watching?</h2><br />
          <Button.Group>
            <Button><Link to="/login" style={{ color: 'black' }}>Login</Link></Button>
            <Button.Or />
            <Button positive><Link to="/signup" style={{ color: 'black' }}>Signup</Link></Button>
          </Button.Group>
          </Container>
    </div>

    )
  }
  // <Button.Group>
  //   <Button>Cancel</Button>
  //     <Button.Or />
  //   <Button positive>Save</Button>
  // </Button.Group>



}

export default Welcome;
