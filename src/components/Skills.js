import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"
import meter100 from "../assets/img/meter100.svg"
import meter60 from "../assets/img/meter60.svg"
import meter95 from "../assets/img/meter95.svg"
import meter85 from "../assets/img/meter85.svg"
import meter80 from "../assets/img/meter80.svg"
import meter90 from "../assets/img/meter90.svg"


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {

          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx"> <h2>Habilidades</h2>
                    <p>Logo abaixo, você encontrará uma lista das linguagens e tecnologias que utilizei ao longo dos anos,
                       abrangendo tanto o desenvolvimento back-end quanto o front-end. Essa variedade 
                      reflete minha dedicação contínua e compromisso em aprimorar minhas habilidades em diversas áreas da programação.</p>
                       <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000} className="skill-slider">
                        <div className="item">
                            <img src={meter95} alt="Image"/>
                            <h5>HTML</h5>
                        </div>
                        <div className="item">
                            <img src={meter95} alt="Image"/>
                            <h5>CSS</h5>
                        </div>
                        <div className="item">
                            <img src={meter95} alt="Image"/>
                            <h5>JavaScript</h5>
                        </div>
                        <div className="item">
                            <img src={meter85} alt="Image"/>
                            <h5>Vuejs</h5>
                        </div>
                        <div className="item">
                            <img src={meter60} alt="Image"/>
                            <h5>TypeScript</h5>
                        </div>
                        <div className="item">
                            <img src={meter60} alt="Image"/>
                            <h5>TailwindCss</h5>
                        </div>
                        <div className="item">
                            <img src={meter80} alt="Image"/>
                            <h5>React</h5>
                        </div>
                        <div className="item">
                            <img src={meter85} alt="Image"/>
                            <h5>SQL Server</h5>
                        </div>
                        <div className="item">
                            <img src={meter85} alt="Image"/>
                            <h5>Python</h5>
                        </div>
                        <div className="item">
                            <img src={meter90} alt="Image"/>
                            <h5>NodeJS</h5>
                        </div>
                        <div className="item">
                            <img src={meter60} alt="Image"/>
                            <h5>PostgreSQL</h5>
                        </div>
                        <div className="item">
                            <img src={meter95} alt="Image"/>
                            <h5>PHP</h5>
                        </div>
                       </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
      )
}