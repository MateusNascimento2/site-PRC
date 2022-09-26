import { Foooter, Top, Container, Content, Bottom, style, style2 } from "./styles"
import { useState} from 'react'
import logo from "../../assets/image2vector3.svg"
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Modal } from "../Modal"

export function Footer() {
    const [show, setShow] = useState(false) 

    return (
        <Foooter>
            <Top>
                <Container>
                    <Content>
                        <div id="logo-footer">
                            <a href="#">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                        <div id="text-footer">
                            <span>Quer trabalhar conosco?</span>
                            <button className="work-button" onClick={() => setShow(true)}>Clique Aqui!</button>
                            <Modal onClose={() => setShow(false)} show={show} />
                        </div>
                        <div id="logo-social">
                            <div>
                                <div className="div-logo">
                                    <a href="#"><FaFacebookF style={style} /></a>
                                </div>
                                <div className="div-logo">
                                    <a href="#"><FaInstagram style={style} /></a>
                                </div>
                            </div>
                        </div>
                    </Content>
                </Container>
            </Top>
            <Bottom>
                <Container>
                    <Content>
                        <div className="div-bottom">
                            <span className="span-bottom">Menu</span>
                            <ul>
                                <li><a className="list-link" href="#inicio">Início</a></li>
                                <li><a className="list-link" href="#about">Quem Somos</a></li>
                                <li><a className="list-link" href="#negociacao">Negociação</a></li>
                                <li><a className="list-link" href="#depoi">Depoimentos</a></li>
                                <li><a className="list-link" href="#contact">Fale Conosco</a></li>
                                <li><a className="list-link" href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="div-bottom">
                            <span className="span-bottom">Se inscrever para notícias</span>
                            <form action="">
                                <div id="form-bottom">
                                    <input id="input-email" type="email" name="email" placeholder="Enter your email address" />
                                    <input type="hidden" name="redirect" />
                                    <button type="submit" id="button-bottom">
                                        <FiMail style={style2} />
                                    </button>
                                </div>
                            </form>
                            <p id="p-bottom">© Copyright 2021&nbsp;                                
                                <a href="">PRC Invest</a>
                            </p>
                        </div>
                    </Content>
                </Container>
            </Bottom>
        </Foooter>
    )
}