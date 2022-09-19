import { createGlobalStyle } from 'styled-components';
import bgImg from "../assets/bg-1.jpg"


export const GlobalStyle = createGlobalStyle`
    :root{
        --dim-gray: #6C6C6B;
        --yellow-pear: #D4D32A;
        --text-color: #eeeded
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        width: 100%;
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        background-image: url(${bgImg});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
        
    }

    body, button{
        font-family: 'Lekton', sans-serif;
        font-weight: 400;
    }

    button{
        cursor: pointer;
    }
`

