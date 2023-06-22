import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {AiFillHome ,AiOutlineShoppingCart} from 'react-icons/ai'
import {BiCreditCardAlt}  from "react-icons/bi";
import "./Navigation.css"

function Navigation() {
  return (
    <Navbar className='nav' bg="light" expand="lg">
      <Container>
        <Navbar.Brand className='nav-brand'><img src="https://sv1.picz.in.th/images/2023/06/03/FmqzNt.jpg" alt="logo-img" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link className='text' to = "/home"><AiFillHome className='home-logo'/>หน้าหลัก</Link></Nav.Link>
            <Nav.Link ><Link className='text' to = "/shop"><AiOutlineShoppingCart className='shop-logo'/>สินค้า</Link></Nav.Link>
            <Nav.Link ><Link className='text' to = "/credit"><BiCreditCardAlt className='credit-logo'/>เครดิตซื้อขาย</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;