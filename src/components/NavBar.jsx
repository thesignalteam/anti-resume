import React, {Component} from "react";
import { Image, Header, Container } from 'semantic-ui-react'
import MenuBar from "./MenuBar";

  export default class NavBar extends Component {
    state = { activeItem: 'Home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
      const { activeItem } = this.state;

        return (
          <Container as="nav">
            <Header as="h2" id="nav-left">
              <Image circular src='./tower.png'/>
              The Signal
            </Header>

              <MenuBar/>

        </Container>)
      }
}
