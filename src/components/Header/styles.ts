import styled from 'styled-components'
import headImg from '../../assets/3-3.png'

export const Container = styled.header`
    background: transparent;
    
`;

export const Content = styled.div`
    
    max-width: 1900px;
    margin: 0 auto;

    padding: 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        height: 70px;
        width: 130px;
    }

    @media (max-width: 480px){
        img{
            height: 50px;
            width: 115px;
        }   
    }
`;

export const NavBar = styled.nav`
        
    a{
        display: inline-block;
        padding: 0 1.5rem;
        text-decoration: none;
        color: var(--text-color);
        font-size: 1.25rem;

        &:hover{
        font-weight: bold;
        color: #FFF
        }

        &:nth-child(6){
            padding-right: 4rem;
        }
        
    }

    
    button{
        padding: 0 1rem;
        height: 2.5rem;
        border: none;
        border-radius: 0.1rem;
        font-size: 1.1rem;
        color: var(--dim-gray);

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
            color: black;
        }

    }

    @media (max-width: 900px){
        display:none;
    }

 /*
    .active{
        position: relative;
        color: rgb(255, 255, 255);
        font-weight: bold;
    }

    .active::before{
        content: url(${headImg});   
        position: absolute;
        left: 3%;
        top: 10%;
    }
    
    */

`;
