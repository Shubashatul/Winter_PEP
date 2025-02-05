
import React from 'react'


import { Navbar,Nav, Button, NavbarBrand, NavLink } from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar className='justify-content-between p-4'>
        <NavbarBrand>
            MyName 
        </NavbarBrand>
        <Nav>
            <NavLink href='#mentor'>Student</NavLink>
            <Button variant='outline-primary'>Say Hello</Button>
        </Nav>
    </Navbar>
  )
}

export default Header

