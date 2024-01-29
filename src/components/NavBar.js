import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logogabriel from '../assets/img/logo-gabriel.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navicon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const AbrirZap = () => {
    window.open("https://wa.me/5551993838045", "_blank")
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (

      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
           
            <img src={logogabriel} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projetos</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/gabriel-sabadin-9a8a01240/?originalSubdomain=br" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/GabrielSabadinn" target="_blank"><img src={navicon2} alt="" /></a>
                <a href="https://www.instagram.com/gabrielsabadinn" target="_blank"><img src={navIcon3} alt="" /></a>
              </div>
             
              <button className="vvd" onClick={AbrirZap}>
      <span>Entre em Contato</span>
    </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
  )
}
