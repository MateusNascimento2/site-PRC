import styled from "styled-components"

export const Section = styled.section`
    background: #f7f7f7;
    padding: 120px 0;

    @media (max-width:425px){
        padding: 80px 0;
    }
    

`

export const Container = styled.div`
    max-width: 1170px;
    padding: 0 20px;
    margin: 0 auto;


    

    

    

`

export const Content = styled.div`
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    align-items: center;
    gap: 15%;
    
    @media (max-width: 640px){
        flex-wrap: wrap;
        flex-direction: column-reverse;

    }


`

export const Imgdiv = styled.div`
    padding: 0 16px;

    img{
        width: 100%;
    }


`

export const Aboutdiv = styled.div`
    padding-right: 1rem;
    width: 50%;

    @media (max-width: 500px){
        width: 320px;
        margin-bottom: 30px;
    }

    span{
        display:block;
        margin-bottom: 2rem;
        color: var(--dim-gray);
        font-size: 20px;
    }

    h5{
        color:#232323;
        font-weight: 600;
        font-size: 2rem;
        margin-bottom: 2rem;
    }
    
    p{
        font-family: "Roboto";
        font-style:normal;
        font-weight: 400;
        font-size: 15px;
        color: #828282;
        line-height: 30px;
        
    }

`



