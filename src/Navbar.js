import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='videos'
          active={activeItem === 'videos'}
          onClick={this.handleItemClick}
        >
          <Link to="/videos" style={{ color: 'black' }}>Videos</Link>
        </Menu.Item>

        <Menu.Item name='songs' active={activeItem === 'songs'} onClick={this.handleItemClick}>
          <Link to="/songs" style={{ color: 'black' }}>Songs</Link>
        </Menu.Item>

        <Menu.Item
          position='right'
          name='addVideo'
          active={activeItem === 'addVideo'}
          onClick={this.handleItemClick}
        >
          <Link to="/new" style={{ color: 'black' }}>Add Video</Link>
        </Menu.Item>
        <Menu.Item
          name='LoginPage'
          active={activeItem === 'loginPage'}
          onClick={this.handleItemClick}
        >
          <Link to="/login" style={{ color: 'black' }}>Login Page</Link>
        </Menu.Item>
      </Menu>
    )
  }
}
