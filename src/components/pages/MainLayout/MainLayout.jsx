import React, { Component } from "react";
import {Link} from 'react-router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import './MainLayout.css';

class MainLayout extends Component {
  static displayName = 'MainLayout';

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="/">Socure</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <Link className="nav-link" activeStyle={{fontWeight: 'bold'}} to="/files">Files</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" activeStyle={{fontWeight: 'bold'}} to="/jobs">Jobs</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" activeStyle={{fontWeight: 'bold'}} to="/tasks">Tasks</Link>
              </NavItem>
            </Nav>
            <Nav className='ml-auto' navbar>
              <NavItem>
              <Button size="small" color="primary" className="ml-3 text-white d-none d-sm-block">Logout</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="maincontent">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainLayout;
