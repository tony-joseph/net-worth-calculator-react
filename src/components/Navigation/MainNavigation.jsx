/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import Help from '../sections/Help';
import About from '../sections/About';

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <>
      <Navbar color="warning" dark expand="md" fixed="top">
        <Container>
          <NavbarBrand href="/">Net Worth Calculator</NavbarBrand>
          <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink onClick={() => setIsHelpOpen(true)}>Help</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => setIsAboutOpen(true)}>About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Help isOpen={isHelpOpen} toggleIsOpen={setIsHelpOpen} />
      <About isOpen={isAboutOpen} toggleIsOpen={setIsAboutOpen} />
    </>
  );
}
