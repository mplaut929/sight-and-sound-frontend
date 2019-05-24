import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu id= "footer">
        <Menu.Item>
          <img src='/Logo.png' position="center"/>
        </Menu.Item>
      </Menu>
    )
  }
}
