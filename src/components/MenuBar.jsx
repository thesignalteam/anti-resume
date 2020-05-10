import React, {Component} from "react";
import { Card, Icon, Button, Image, Divider, Segment, Header, Grid, Menu, Container} from 'semantic-ui-react'


export default class MenuBar extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (<Menu text size="huge" id="nav-menu">

<Menu.Item
  name='Home'
  active={activeItem === 'Home'}
  onClick={this.handleItemClick}
/>
<Menu.Item
  name='About'
  active={activeItem === 'About'}
  onClick={this.handleItemClick}
/>
<Menu.Item
  name='Seniors'
  active={activeItem === 'Seniors'}
  onClick={this.handleItemClick}
/>
<Menu.Item
  name='Alumni'
  active={activeItem === 'Alumni'}
  onClick={this.handleItemClick}
/>
<Menu.Item
  name='Professors'
  active={activeItem === 'Professors'}
  onClick={this.handleItemClick}
/>
</Menu>);
}
}
