import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
	
	<Navbar bg="primary" expand="lg" variant="dark">
		<Navbar.Brand href="/">Photo Gallery</Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="mr-auto">
			  <Nav.Link href="/">Home</Nav.Link>
			</Nav>
			<Nav>
				<Nav.Link href="/">Login</Nav.Link>
				<Nav.Link href="/">Register</Nav.Link>
			</Nav>
		  </Navbar.Collapse>
	</Navbar>
	
	);
  }
}


export default Header;