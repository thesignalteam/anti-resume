import React, {Component} from "react";
import { Card, Icon, Button, Image, Divider, Segment, Header, Grid, Container} from 'semantic-ui-react'
import MenuBar from "../MenuBar";



// function NavBar() {
//   const [activeItem, setState] = useState('Home');
//
//   const handleItemClick = (e, { name }) => setState({ activeItem: name })


  // const [activeItem, setState] = useState('Home');
  //
  //
  // function handleItemClick(event, {name}) {
  //   // const name = event.target.name;
  //   setState(name);
  //   console.log(name);
  //
  // }

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

// export default NavBar;
