import React, {Component} from "react";
import { Image, Header, Container, Menu } from 'semantic-ui-react';

  export default class NavBar extends Component {
    state = { activeItem: '' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {

      const { activeItem } = this.state

        return (
          <Container as="nav">
            <Header as="h2" id="nav-left">
              <Image circular src='../../tower.png'/>
              The Signal
            </Header>

            <Menu secondary size="huge" id="nav-menu">
              <Menu.Item
                class="item"
                name='Home'
                href="/"
                active={activeItem === 'Home'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                class="item"
                name='About'
                href="/about"
                active={activeItem === 'About'}
                onClick={this.handleItemClick}
              />
              <Menu.Item 
                class="item"
                name='Seniors'
                href="/all/#2020"
                active={activeItem === 'Seniors'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                class="item"
                name='Alumni'
                href="/all/#alumni"
                active={activeItem === 'Alumni'}
                onClick={this.handleItemClick}
              />

            </Menu>

        </Container>)
      }
}
