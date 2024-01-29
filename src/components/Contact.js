/*import { useState } from "react";
import { Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"


export const Contact = () => {
    const fromInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''

    }
     
    const [formDetails, setFormDetails] = useState(fromInitialDetails);
    const [buttonText, setButtonText] = useState('Enviar');
    const [status,setStatus] = useState({});
    const onFormUpdate = (category, valuye) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
   }


   const handleSubmit = () => {

   }



    return(
<section className="contact" id="connect">
    <Container>
        <Row className="align-items-center">
        <Col md={6}>
            <img src={contactImg} alt="Contate-me"/>
        </Col>
        <Col md={6}>
        <h2>Entrar em contato</h2>
        <form onSubmit={handleSubmit}>
            <Row>
                <Col sm={6} className="px-1"><input type="text" value={formDetails.firstName} placeholder="Primeiro Nome" onChange={(e) => onFormUpdate('firstName', e.target.value)}></input></Col>
                <Col sm={6} className="px-1"><input type="text" value={formDetails.lastName} placeholder="Último Nome" onChange={(e) => onFormUpdate('lastName', e.target.value)}></input></Col>
                <Col sm={6} className="px-1"><input type="email" value={formDetails.email} placeholder="E-mail" onChange={(e) => onFormUpdate('email', e.target.value)}></input></Col>
                <Col sm={6} className="px-1"><input type="tel" value={formDetails.phone} placeholder="Celular" onChange={(e) => onFormUpdate('phone', e.target.value)}></input></Col>
            <Col>
            <textarea row="6" value={formDetails.message} placeholder="Mensagem" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
             <button type="submit"><span>{buttonText}</span></button>
            </Col>
            {
                satatus.message &&
                <Col>
                <p className={status.sucess === false ? "Tente Novamente" : "Enviado"}>{status.message}</p>
                </Col>
            }
            </Row>
        </form>
        </Col>
        </Row>

    </Container>

</section>
    )
}
*/