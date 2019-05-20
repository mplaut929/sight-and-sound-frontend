import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


class Welcome extends Component {


  render(){
    return (

      <Button.Group>
        <Button><Link to="/login" style={{ color: 'black' }}>Login</Link></Button>
          <Button.Or />
        <Button positive><Link to="/signup" style={{ color: 'black' }}>Signup</Link></Button>
      </Button.Group>

    )
  }
  // <Button.Group>
  //   <Button>Cancel</Button>
  //     <Button.Or />
  //   <Button positive>Save</Button>
  // </Button.Group>



}

export default Welcome;
