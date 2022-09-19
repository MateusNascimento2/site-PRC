import styled from "styled-components"



export const Section = styled.section`
        
        
    @media (max-width: 549px){
        
    }
       
`


export const Container = styled.div`
        max-width: 1170px;
        margin: 0 auto;
        
`


export const Content = styled.div`
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        


        #manImg{
            
        
            #man{
                
                width:500px;

                @media (max-width: 1045px){
                    width: 400px;
                }

                @media (max-width: 549px){
                    width: 350px;
                }

                @media (max-width: 489px){
                    padding-top: 110px;
                    width: 300px;
                }

                @media (max-width: 425px){
                    width: 280px;
                }

                @media (max-width: 320px){
                    width: 250px;
                }
                
            }
        }


    #right-image{
        position: relative;
        bottom: 80px;
        left: 5%;

        @media (max-width: 425px){
            left: 0%;
        }
        

        #quadro{
            max-width: 100%;
            width: 540px;

            @media (max-width: 1155px){
                width: 500px;
            }

            @media (max-width: 1110px){
                width: 480px;
            }

            @media (max-width: 549px){
                width: 440px;
            }

            @media (max-width: 489px){
                width: 400px;
            }

            @media (max-width: 425px){
                width: 370px;
            }

            @media (max-width: 320px){
                width: 290px;
            }
        }

        #setaImg{
            position: absolute;
            bottom: 185px;
            right: 87%;

            @media (max-width: 1045px){
                bottom: 73%;
            }

            @media (max-width: 1110px){
                bottom:71%;
            }
            
            #seta{
                width: 80px;

                @media (max-width: 549px){
                width: 70px;
                }

                @media (max-width: 425px){
                    width: 60px;
                }

                @media (max-width: 400px){
                    width: 55px;
                }

                @media (max-width: 320px){
                    width: 45px;
                }
            }
        }
    }


    #textblock-container{
        position: absolute;
        top: 45px;
        left: 45px;

        @media (max-width: 549px){
            top:35px;
            left: 40px;
        }

        @media (max-width: 489px){
            top:20px;
        }
    }
 

    #text1-div{
        display: block;
        visibility: visible;
        font-size: 48px;
        height: 60px;

        @media (max-width: 489px){
            font-size: 40px;

        }

        @media (max-width: 320px){
            height: 40px;
            font-size: 30px;
        }
    }

    #text2-div{
        display: block;
        font-size: 48px;
        font-weight: 700;

        @media (max-width: 489px){
            font-size: 40px;

        }

        @media (max-width: 320px){
            font-size: 30px;
        }

    }

    #text3-div{   
        display: inline-block;
        font-size: 17px;
        text-transform: uppercase;
        color: var(--yellow-pear);
        margin-top: 10px;
        font-weight:600;

        @media (max-width: 320px){
            font-size: 10px;
        }
    }
`