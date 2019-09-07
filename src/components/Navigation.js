import React from 'react';
import iconMenu from '../assets/images/menu-icon-4.png';
import { Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="menu-mobile">
        <Nav>

          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              <img id="icon-menu" src={iconMenu} alt="MENÚ"/>
            </DropdownToggle>
            <DropdownMenu className="bg-warning">
              <DropdownItem ><NavLink className="drop-menu" href="/">Home</NavLink></DropdownItem>
              <DropdownItem><NavLink className="drop-menu" href="/typePokemon/">Filter By Type</NavLink></DropdownItem>
              <DropdownItem><NavLink className="drop-menu" href="/orderPokemon/">Order your Pokemon</NavLink></DropdownItem>
              <DropdownItem><NavLink className="drop-menu" href="/stats/">Stats</NavLink></DropdownItem>
            </DropdownMenu>
          </Dropdown>

        </Nav>
      </div>
    );
  }
}
