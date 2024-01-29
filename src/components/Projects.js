import { Container, Row, Tab, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg4 from "../assets/img/project-img4.png"
import projImg5 from "../assets/img/project-img5.png"
import projImg6 from "../assets/img/project-img6.png"
import projImg7 from "../assets/img/project-img7.png"
import projImg8 from "../assets/img/project-img8.png"




export const Projects = () => {
    const projects = [
        {
          title: "Website para Ecommerce",
          description: "Design & Back-End & Front-End",
          imgUrl: projImg1,
        },
        {
          title: "Dashboard para Cursos",
          description: "Design & Back-End & Front-End",
          imgUrl: projImg2,
        },
        {
        
          title: "Website Detalhamento de curso",
          description: "Front-End & Back-End",
          imgUrl: projImg7,
        },
        {
          title: "Website para Banco",
          description: "Back-End & Front-End & Design",
          imgUrl: projImg8,
        },
        {
          title: "Website para Venda de Cursos",
          description: "Back-End, Front-End",
          imgUrl: projImg5,
        },
        {
          title: "Inteligência Artificial",
          description: "Back-End",
          imgUrl: projImg4,
        },
      ];
      const projectsForTabTwo = [
        {
          title: "Script de Geração do LCDPR ",
          description: "Back-End",
          imgUrl: projImg3,
        },
        {
          title: "Gerador de PDF",
          description: "Back-End & Front-End",
          imgUrl: projImg6,
        },
        
    ];
    
return(
<section className="project" id="project">
<Container>
<Row>
    <Col>
    <h2>Projetos</h2>
    <p>Abaixo, você encontrará projetos que desenvolvi, abrangendo tanto o back-end quanto o front-end. Caso deseje obter informações mais detalhadas sobre algum desses projetos, convido-o(a) a visitar meu perfil no GitHub, onde disponibilizo códigos e documentações adicionais.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justfy-content-center align-items-center" id="pills-tab">
            <Nav.Item >
                      <Nav.Link eventKey="first">Aba 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Aba 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Aba 3</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return(
                                       <ProjectCard key={index}
                                       {...project}
                                      />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
    <Row>
        {
            projectsForTabTwo.map((project, index) => {
                return(
                   <ProjectCard key={index}
                   {...project}
                  />
                )
            })
        }
       
    </Row>
</Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <p>Fique de olho! Estou constantemente trabalhando em novos projetos incríveis que em 
                        breve serão revelados. A cada semana, surgirá uma novidade fresquinha, 
                        refletindo minha paixão pela inovação. Mal posso esperar para compartilhar essas criações com vocês!</p>
                    </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
    </Col>
</Row>
</Container>
<img className="background-image-right" src={colorSharp2}/>
</section>
)
}

