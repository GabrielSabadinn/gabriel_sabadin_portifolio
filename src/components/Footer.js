import { Container, Col, Row } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logoGabriel from "../assets/img/logo-gabriel.svg"

export const Footer = () => {
    return(
        <footer className="footer">
            <Container className="Container-footer ">
                <Row className="align-item-center">
            <Col sm={6} className="mt-5">
                <img src={logoGabriel} alt="Logo" />
            </Col>
            <Col sm={6} className="text-center text-sm-end mt-5">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/gabriel-sabadin-9a8a01240/?originalSubdomain=br" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/GabrielSabadinn" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/gabrielsabadinn" target="_blank"><img src={navIcon3} alt="" /></a>
              </div>
                <p>CopyRight 2024. Todos direitos reservados para Gabriel Belleboni Sabadin</p>
            </Col>
                </Row>
            </Container>
        </footer>
    )

}