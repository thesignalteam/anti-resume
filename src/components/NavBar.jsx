import React, { Component } from "react";
import { Image, Header, Container, Menu } from 'semantic-ui-react';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class NavBar extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {

    const { activeItem } = this.state

    return (
      <Container as="nav">
        <Header as="h2" id="nav-left">
          <Image circular src='../../tower.png' />
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
            name='Curf'
            href="/all/#curf"
            active={activeItem === 'Curf'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            class="item"
            name='2022'
            href="/all/#2022"
            active={activeItem === '2022'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            class="item"
            name='2021'
            href="/all/#2021"
            active={activeItem === '2021'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            class="item"
            name='2020'
            href="/all/#2020"
            active={activeItem === '2020'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            class="item"
            name='2019'
            href="/all/#2019"
            active={activeItem === '2019'}
            onClick={this.handleItemClick}
          />
          {/* <Menu.Item
            class="item"
            name='Alumni'
            href="/all/#alumni"
            active={activeItem === 'Alumni'}
            onClick={this.handleItemClick}
          /> */}
          <Menu.Item
            class="item"
            name='Faculty'
            href="/all/#faculty"
            active={activeItem === 'Faculty'}
            onClick={this.handleItemClick}
          />

        </Menu>

        <Menu vertical id="nav-mobile">
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
            name='Curf'
            href="/all/#curf"
            active={activeItem === 'Curf'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            class="item"
            name='2021'
            href="/all/#2021"
            active={activeItem === '2021'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            class="item"
            name='2020'
            href="/all/#2020"
            active={activeItem === '2020'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            class="item"
            name='2019'
            href="/all/#2019"
            active={activeItem === '2019'}
            onClick={this.handleItemClick}
          />
          {/* <Menu.Item
            class="item"
            name='Alumni'
            href="/all/#alumni"
            active={activeItem === 'Alumni'}
            onClick={this.handleItemClick}
          /> */}
          <Menu.Item
            class="item"
            name='Faculty'
            href="/all/#faculty"
            active={activeItem === 'Faculty'}
            onClick={this.handleItemClick}
          />

        </Menu>


      </Container>)
  }
}
