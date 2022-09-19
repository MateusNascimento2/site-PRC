import { Section, Container, Content, ContactUs, Info, Style, Stylel } from "./styles";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { Form } from "../Formulario";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Content>
            <ContactUs>
              <div>
                <span id="fale-conosco">FALE CONOSCO</span>
                <h5>DESEJA SABER MAIS SOBRE A NOSSA NEGOCIAÇÃO? <br/>ENVIE NOS UMA MENSAGEM!</h5>
                <Info>
                  <div id="contatos">
                    <div className="div-contatos">
                      <FiPhoneCall style={Style} />
                      <span className="span-contact">+55 21 9999-9999</span>
                    </div>
                    <div className="div-contatos">
                      <FiMail style={Style} />
                      <span className="span-contact">no-reply@gmail.com</span>
                    </div>
                    <div className="div-contatos">
                      <FiMapPin style={Stylel} />
                      <span className="span-contact">Av. das Américas, 18.500, Sala 432</span>
                    </div>
                  </div>
                </Info>
              </div>
            </ContactUs>
          <Form />
        </Content>
      </Container>
    </Section>
  );
}
