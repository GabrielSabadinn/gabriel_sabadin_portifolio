import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Front-End", "Back-End", "Full Stack"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const AbrirZap = () => {
        window.open("https://wa.me/5551993838045", "_blank")
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker)};

    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        
        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Bem-vindo ao meu Portfolio</span>
                    <h1>{`Olá, eu sou Gabriel Sabadin `}<span children="wrap">{text}</span></h1>
                    <p>Sou um desenvolvedor Full Stack em constante aprendizado, com expertise tanto em desenvolvimento 
                        front-end quanto back-end. Com alguns anos de experiência em projetar interfaces intuitivas e responsivas,
                         alinho habilidades técnicas robustas com minha paixão pelo desenvolvimento. Enquanto busco sempre entregar
                          soluções web eficientes e esteticamente agradáveis, estou também planejando uma pós-graduação em cybersecurity.
                           Meu compromisso é assegurar uma experiência de usuário excepcional em cada projeto, 
                        seja desenvolvendo aplicações web dinâmicas ou aprimorando a interatividade de um site existente.</p>
                   
                    <button onClick={AbrirZap}>Vamos Conversar<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}