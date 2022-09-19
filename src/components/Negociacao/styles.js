import styled from "styled-components";


export const Section = styled.section`
    background: #FFF;
    padding: 120px 0;



`


export const Container = styled.div`
    max-width: 1170px;
    margin: 0 auto;

`



export const Content = styled.div`
    padding: 0 1rem;

    
    #title{
        display: block;
        margin-bottom: 1.2rem;
        text-align: center;
        color: var(--dim-gray);
        text-transform: uppercase;
        font-size: 20px;
    }

    #subtitle{
        font-size: 2rem;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 5rem;
    }
    
    

    .content-wrapper{
        display: flex;
        justify-content: center;

        @media (max-width:840px){
            align-items: center;
            flex-direction: column;
            
        }
        
    }

    .card-wrapper{
        background-color: transparent;
        max-width: 100%;
        width: 400px;
        height: 180px;
        padding: 0 15px;
        perspective: 1000px;

        @media (max-width:840px){
            padding: 0;
        }
    }

    .card-inner{
        position: relative;
        padding: 16px;
        text-align:center;
        transition: transform 0.8s;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        
        

    }


    .card-wrapper:hover .card-inner{
        transform: rotateY(180deg);
    }

    

    .card-title, .card-description{
        position: absolute;
        right: 0;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
    }

    .card-title{
        font-family: "Lekton", sans-serif;
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        
        h5{
            font-weight: 600;
        }
    }
    

    .card-icons{
        display: inline-block;
        padding: 24px 0;
        font-size: 40px;
    }

    .card-description{
        font-size: 16px;
        padding: 25px;
        transform: rotateY(180deg);
        font-family: "Roboto", sans-serif;

        @media (max-width:840px){
            font-size: 14px;
        }
        
        
    }


`

export const Style = {color: '#d4d32a'}
