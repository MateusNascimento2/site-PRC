import styled from "styled-components"

export const Formulario = styled.div`

    input, textarea, select{
        border: 1px solid #dfdfdf;
        width: 100%;
        margin: 0 0 15px 0;
        max-width: 100%;
        resize: none;
        outline: none;
        color: #828282;
        line-height: initial;
        word-break: initial;
    }

    #form{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;

    }

    #input-div{
        max-width:475px;
        margin-bottom: 4rem;
        padding: 0 15px;

        @media (max-width:425px){
            margin-bottom: 0rem;
        }
    }

    .input-class{
        font-family: "Roboto";
        padding: 15px 20px;
        font-size: 14px;
        margin-bottom: 25px;
        
    }

    #textarea-div{
        margin-bottom: 4rem;
        padding: 0 15px;
    }

    #textarea{
        font-family: "Roboto";
        height: 200px;
        padding: 15px 20px;
        font-size: 14px;
        
    }


    #checkbox-div{
        width:50%;
        padding-left: 24px;
        text-align: left;

        @media (max-width:530px){
            width: 100%;
            margin-bottom: 16px;
        }
        
    }

    #checkbox{
        padding: 0;
        margin-right: 10px;
        margin-top: 5px;
        width: auto;
        display: inline-block;
        vertical-align: top;
    }

    #label{
        font-family: "Roboto";
        color: #828282;
        font-size: 13px;
        line-height: 22px;
        display: inline-block;
        vertical-align: top;

        a{
            color: #232323;
            text-decoration: underline;
        }
    }

    #button-div{
        width:50%;
        padding-right: 24px;
        text-align: right;

        @media (max-width: 530px){
            width: 100%;
            text-align: center;
        }
    }

    #form-button{
        font-family: "Roboto";
        background: #6c6c6b;
        color: #d4d32a;
        font-size: 12px;
        padding: 10px 26px;
        cursor: pointer;
        display: inline-block;
        border: 2px solid transparent;
        border-radius: 0;
        text-transform: uppercase;
        width: auto;

        @media (max-width:425px){
            padding: 10px 20px;
        }
    }

`