import styled from "styled-components"

export const Foooter=styled.footer`
    background: #6c6c6b;
    color: #999;

`

export const Top=styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    border-color: rgba(255,255,255,.1);
    border-bottom: 1px solid;

`

export const Container = styled.div`
    max-width: 1170px;
    padding: 0 15px;
    margin: 0 auto;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media (max-width: 450px){
        flex-direction: column;
        justify-content: center;
    }

    #logo-footer{
        padding: 0 15px;

        @media (max-width: 450px){
            padding-top: 15px;
            padding-bottom: 30px;
        }

        img{
            max-height: 40px;
            max-width: 100%;
            height: auto;
            vertical-align: middle;
        }
    }

    #text-footer{
        padding: 0 15px;
        text-align: center;

        span{
            margin-right: 5px;
            color: #FFFF;
            text-transform: uppercase;
            font-size: 15px;
            font-weight:700;
        }

        .work-button{
            font-family: 'Lekton',sans-serif;
            font-size: 24px;
            background-color: var(--dim-gray);
            border-style: none;
            text-decoration: underline;
            text-transform: uppercase;
            color: #FFF;
            font-size:13px;
            line-height: 22px;
            text-underline-position: under;
        }
    }

    #logo-social{
        @media (max-width: 450px){
            padding-top: 16px;
        }
    }

    .div-logo{
        padding: 0 15px;
        display:inline-block;
    }

    .div-bottom{
        padding: 0 15px;

        ul{
            list-style: none;
            padding: 0;
            font-family: 'Roboto';
            font-size: 15px;
            
            li{
                margin-bottom: 10px;


                @media (max-width: 450px){
                    text-align: center;
                }
            }

            @media (max-width: 450px){
                padding: 16px 0;
            }
        }

       
    }

    .span-bottom{
        display:inline-block;
        margin-bottom: 20px;
        font-weight: 700;
        color: #fff;

        @media (max-width: 450px){
            margin-bottom: 0px;
            margin-left: 33px;
            
            
        }
    }

    .list-link{
        text-decoration:none;
        color: #999;

        &:hover{
            color: #FFFF;
            transition: 0.5s;
        }
    }

    #form-bottom{
        margin: 30px 0;
        position: relative;
    }

    #input-email{
        width:100%;
        padding: 13px 70px 13px 15px;
        font-family: "Roboto";
        font-size: 14px;
        border-radius: 0.25rem;
        border: 0;
        outline-style: none;
    }

    #button-bottom{
        display: inline-block;
        position: absolute;
        top: 0;
        right:0;
        bottom:0;
        overflow: hidden;
        padding: 4px 18px;
        background: #d4d32a;
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        border: none;
    }

    #p-bottom{
        font-family: 'Roboto';
        font-size: 15px;
        color: #999;

        a{
            color: #fff;
            text-underline-position: under;
        }

    }

`


export const Bottom = styled.div`
    padding: 5% 0;

`

export const style={color: '#FFF'}
export const style2={fontSize: '18px'}