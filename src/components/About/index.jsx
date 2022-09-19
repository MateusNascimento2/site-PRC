import { Section, Aboutdiv, Imgdiv, Container, Content } from "./styles";


export function About() {
    return (
        <Section id="about">
            <Container>
                <Content >
                    <Imgdiv>
                        <img src="https://via.placeholder.com/446x509" alt="" />
                    </Imgdiv>
                    <Aboutdiv>
                        <span>EMPRESA</span>
                        <h5>QUEM SOMOS</h5>
                        <p>Somos uma empresa especializada em compra de precatórios, oferecendo garantia e segurança, 
                            á você que não deseja mais aguardar pelo recebimento do mesmo e precisa desse valor agora.
                            Garantimos uma negociação <b>rápida</b>, <b>transparente</b> e <b>segura</b>, com a melhor proposta do mercado, condições favoráveis e sem burocracias.
                        </p>
                    </Aboutdiv>
                </Content>
            </Container>
        </Section>
    );
}
