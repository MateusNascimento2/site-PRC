import { Section, Container, Content } from "./styles"
import manImg from "../../assets/1-1.png"
import quadro from "../../assets/quadro-branco.png"
import seta from "../../assets/3-1.png"

export function Slider() {
    return (
        <Section id="inicio">
            <Container>
                <Content>
                    <div id="manImg">
                        <img src={manImg} alt="" id="man" />
                    </div>
                    <div id="right-image">
                        <div id="img-container">
                            <div id="quadroImg">
                                <img src={quadro} alt="" id="quadro" />
                            </div>
                            <div id="setaImg">
                                <img src={seta} alt="" id="seta" />
                            </div>
                            <div id="textblock-container">
                                <div id="text1-div">
                                    Seu Precatório
                                </div>
                                <div id="text2-div">
                                    Sem preocupação.
                                </div>
                                <div id="text3-div">
                                    Segurança e garantia no processo.
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Container>
        </Section>
    )
}