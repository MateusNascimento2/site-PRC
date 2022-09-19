import logoImg from '../../assets/logo-prc2.svg'
import { Container, Content, NavBar } from './styles'

import { Burger } from '../Burger'
import { Menu } from '../Menu'
import { useState } from 'react'

export function Header() {
    const [open, setOpen] = useState(false);
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="logo prc" />
                <NavBar>
                    <a href='#inicio' >Início</a>
                    <a href='#about' >Quem Somos</a>
                    <a href="#negociacao">Negociação</a>
                    <a href='#depoi' >Depoimentos</a>
                    <a href='#contact' >Contato</a>
                    <a href='/blog' >Blog</a>
                </NavBar>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </Content>
        </Container>
    )
}