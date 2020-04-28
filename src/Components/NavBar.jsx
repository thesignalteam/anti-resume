import React, {useState} from "react";
import { Card, Icon, Button, Image, Divider, Segment, Header, Grid, Menu, Container} from 'semantic-ui-react'




function NavBar() {

  
  const [activeItem, setState] = useState('Alumni');

  // function handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  function handleItemClick(event) {
    setState(event.name);

  }

  return <Container as="nav">
      <Header as="h2">
        <Image circular src='./tower.png'/>
        The Signal
          </Header>

          <Menu text size="huge" id="nav-menu">
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='About'
            active={activeItem === 'About'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Seniors'
            active={activeItem === 'Seniors'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Alumni'
            active={activeItem === 'Alumni'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Professors'
            active={activeItem === 'Professors'}
            onClick={handleItemClick}
          />
          </Menu>
  </Container>
}

export default NavBar;
