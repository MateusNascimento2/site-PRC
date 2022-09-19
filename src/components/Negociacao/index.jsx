import { FaRegCheckCircle, FaRegMoneyBillAlt, FaRegHandshake } from "react-icons/fa";
import { Section, Container, Content, Style } from "./styles";


export function Negociacao() {
    return (
        <Section id="negociacao">
            <Container>
                <Content>
                    <div>
                        <span id="title">Negociação</span>
                        <h5 id='subtitle'>Como é feita a negociação</h5>
                    </div>
                    <div className="content-wrapper">
                        <div className='card-wrapper'>
                            <div className="card-inner">
                                <div className="card-title">
                                    <i className="card-icons"><FaRegMoneyBillAlt style={Style} /></i>
                                    <h5>Proposta de Valor</h5>
                                </div>
                                <div className="card-description">
                                    <p>
                                        Realizamos a proposta e negociamos o valor. Após a aprovação solicitamos o envio
                                        da documentação necessárias para a cessão de crédito.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='card-wrapper'>
                            <div div className="card-inner">
                                <div className="card-title">
                                    <i className="card-icons"><FaRegCheckCircle style={Style} /></i>
                                    <h5>Verificação Jurídica</h5>
                                </div>
                                <div className="card-description">
                                    <p>
                                        Nosso setor jurídico analisa o processo do precatório, assim como as documentações necessárias
                                        para a cessão de crédito.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='card-wrapper'>
                            <div div className="card-inner">
                                <div className="card-title">
                                    <i className="card-icons"><FaRegHandshake style={Style} /></i>
                                    <h5>Cessão de Crédito</h5>
                                </div>
                                <div className="card-description">
                                    <p>
                                        Definimos junto ao cliente a melhor data e local para a assinatura da escritura,
                                        onde irá constar nosso consultor e o escriturário. Garantimos o recebimento do valor à vista no dia da cessão
                                        de crédito.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Container>
        </Section>
    )
}