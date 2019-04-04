import React from 'react';

import { Form, FormControl, Button, Navbar, Nav, NavItem } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
	
	<Navbar fixed="bottom" bg="light" variant="light">
		<Navbar.Text>
			<a href="#login">Privacy Policy</a>
		</Navbar.Text>
		<Navbar.Collapse className="justify-content-end">
			<Form inline>
				<FormControl type="text" placeholder="Search" className=" mr-sm-2" />
				<Button type="submit">Submit</Button>
			</Form>
		</Navbar.Collapse>
	</Navbar>
	
	);
  }
}


export default Footer;