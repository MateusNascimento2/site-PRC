import styled from "styled-components"

export const Section = styled.section`
    padding: 120px 0;
    background: #fff;

    @media (max-width:425px){
        padding: 80px 0;
    }
`

export const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;

`

export const Content = styled.div`
    padding: 0 1rem;

`

export const ContactUs = styled.div`
    padding: 0 1rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width:425px){
        margin-bottom: 2rem;
    }

    #fale-conosco{
        display:block;
        margin-bottom: 1.2rem;
        text-align: center;
        color: var(--dim-gray);
        font-size: 20px;
    }

    h5{
        font-family: "Lekton";
        font-size: 2rem;
        font-weight: 600;
        text-align: center;
        
    }
`

export const Info = styled.div`
    text-align: center;
    

    #contatos{
        width: 100%;
        margin-right: -15px;
        margin-left: -15px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

    }

    .div-contatos{
        display: flex;
        justify-content: center;
        align-items: center;
        
        padding: 0 2rem;

        &:nth-child(3){
            padding-top: 5px;
        }

        @media (max-width:425px){
            margin-top: 5px;
            margin-bottom: 10px;

            &:nth-child(3){
                padding-top: 0px;
            }
        }
    }

    .span-contact{
        color: #232323;
        font-size: 15px;
        line-height: 20px;
        font-weight: 600;
    }

    

`


export const Style = {color: '#d4d32a', marginRight: '5px', fontSize: '20px'}
export const Stylel = {color: '#d4d32a', marginRight: '5px', fontSize: '20px'}