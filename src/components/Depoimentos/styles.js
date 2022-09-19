import styled from "styled-components";

export const Section = styled.section`
  background: #f7f7f7;
  padding: 120px 0;

    @media (max-width:425px){
      padding: 80px 0;
    }
`;

export const Container = styled.div`
  max-width: 75vw;
  margin: 0 auto;
`;

export const Content = styled.div`
  #title-section {
    display: block;
    margin-bottom: 1.2rem;
    text-align: center;
    color: var(--dim-gray);
    text-transform: uppercase;
    font-size: 20px;
  }

  #subtitle {
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 5rem;
  }

  .testimonial-wrapper {
    width: 100%;

    input {
      display: none;
    }
  }

  .testimonials {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 350px;
    perspective: 1000px;
    overflow: hidden;

    .item {
      top: 0;
      position: absolute;
      box-sizing: border-box;
      max-width: 400px;
      padding: 1rem;
      transition: transform 0.4s;
      transform-style: preserve-3d;
      user-select: none;
      cursor: pointer;
    }
  }

  .dots {
    display: flex;
    justify-content: center;
    align-items: center;

    label {
      display: block;
      height: 5px;
      width: 5px;
      border-radius: 50%;
      cursor: pointer;
      background-color: var(--dim-gray);
      margin: 7px;
      transition: transform 0.2s, color 0.2s;
    }
  }

  .testimonial-textbox {
    background-color: #fff;
    font-family: "Roboto";
    padding: 10px 15px;
    margin-bottom: 1rem;
    box-shadow: 0 0 25px rgb(0 0 0 / 15%);
    border-radius: 5px;
    color: var(--dim-gray);
  }

  .testimonial-author {
    h5 {
      font-family: "Roboto";
      font-size: 18px;
    }
  }

  /* First */
  #t-1:checked ~ .dots label[for="t-1"] {
    transform: scale(2);
    background-color: var(--yellow-pear);
  }
  #t-1:checked ~ .dots label[for="t-2"] {
    transform: scale(1.5);
  }
  #t-1:checked ~ .testimonials label[for="t-1"] {
    z-index: 4;
  }
  #t-1:checked ~ .testimonials label[for="t-2"] {
    transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
    z-index: 3;
  }
  #t-1:checked ~ .testimonials label[for="t-3"] {
    transform: translateX(600px) translateZ(-180px) rotateY(-25deg);
    z-index: 2;
  }
  #t-1:checked ~ .testimonials label[for="t-4"] {
    transform: translateX(900px) translateZ(-270px) rotateY(-35deg);
    z-index: 1;
  }
  #t-1:checked ~ .testimonials label[for="t-5"] {
    transform: translateX(1200px) translateZ(-360px) rotateY(-45deg);
  }

  /* Second */
  #t-2:checked ~ .dots label[for="t-1"] {
    transform: scale(1.5);
  }
  #t-2:checked ~ .dots label[for="t-2"] {
    transform: scale(2);
    background-color: var(--yellow-pear);
  }
  #t-2:checked ~ .dots label[for="t-3"] {
    transform: scale(1.5);
  }
  #t-2:checked ~ .testimonials label[for="t-1"] {
    transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
  }
  #t-2:checked ~ .testimonials label[for="t-2"] {
    z-index: 3;
  }
  #t-2:checked ~ .testimonials label[for="t-3"] {
    transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
    z-index: 2;
  }
  #t-2:checked ~ .testimonials label[for="t-4"] {
    transform: translateX(600px) translateZ(-180px) rotateY(-25deg);
    z-index: 1;
  }
  #t-2:checked ~ .testimonials label[for="t-5"] {
    transform: translateX(900px) translateZ(-270px) rotateY(-35deg);
  }

  /* Third */
  #t-3:checked ~ .dots label[for="t-2"] {
    transform: scale(1.5);
  }
  #t-3:checked ~ .dots label[for="t-3"] {
    transform: scale(2);
    background-color: var(--yellow-pear);
  }
  #t-3:checked ~ .dots label[for="t-4"] {
    transform: scale(1.5);
  }
  #t-3:checked ~ .testimonials label[for="t-1"] {
    transform: translateX(-600px) translateZ(-180px) rotateY(25deg);
  }
  #t-3:checked ~ .testimonials label[for="t-2"] {
    transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
  }
  #t-3:checked ~ .testimonials label[for="t-3"] {
    z-index: 3;
  }
  #t-3:checked ~ .testimonials label[for="t-4"] {
    transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
    z-index: 2;
  }
  #t-3:checked ~ .testimonials label[for="t-5"] {
    transform: translateX(600px) translateZ(-180px) rotateY(-25deg);
  }

  /* Fourth */
  #t-4:checked ~ .dots label[for="t-3"] {
    transform: scale(1.5);
  }
  #t-4:checked ~ .dots label[for="t-4"] {
    transform: scale(2);
    background-color: var(--yellow-pear);
  }
  #t-4:checked ~ .dots label[for="t-5"] {
    transform: scale(1.5);
  }
  #t-4:checked ~ .testimonials label[for="t-1"] {
    transform: translateX(-900px) translateZ(-270px) rotateY(35deg);
  }
  #t-4:checked ~ .testimonials label[for="t-2"] {
    transform: translateX(-600px) translateZ(-180px) rotateY(25deg);
  }
  #t-4:checked ~ .testimonials label[for="t-3"] {
    transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
    z-index: 2;
  }
  #t-4:checked ~ .testimonials label[for="t-4"] {
    z-index: 3;
  }
  #t-4:checked ~ .testimonials label[for="t-5"] {
    transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
  }

  /* Fifth */
  #t-5:checked ~ .dots label[for="t-4"] {
    transform: scale(1.5);
  }
  #t-5:checked ~ .dots label[for="t-5"] {
    transform: scale(2);
    background-color: var(--yellow-pear);
  }
  #t-5:checked ~ .testimonials label[for="t-1"] {
    transform: translateX(-1200px) translateZ(-360px) rotateY(45deg);
  }
  #t-5:checked ~ .testimonials label[for="t-2"] {
    transform: translateX(-900px) translateZ(-270px) rotateY(35deg);
    z-index: 1;
  }
  #t-5:checked ~ .testimonials label[for="t-3"] {
    transform: translateX(-600px) translateZ(-180px) rotateY(25deg);
    z-index: 2;
  }
  #t-5:checked ~ .testimonials label[for="t-4"] {
    transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
    z-index: 3;
  }
  #t-5:checked ~ .testimonials label[for="t-5"] {
    z-index: 4;
  }
`;
