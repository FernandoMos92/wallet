import styled from 'styled-components';

const Main = styled.div`
display: flex;
flex-flow: row nowrap;
max-height: 100vh;
max-width: 100vw;
align-content: center;
justify-content: center;
margin-top: 15%;
form{ 
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 30px;
  user-select: none;

  input{ 
    align-self: flex-end;
    border: none;
    border-bottom: 3px groove rgb(141,208,112);
    border-radius: 2px;
    margin-left: 8px;
    width: 240px;
    margin-bottom: 15px;
    outline: none;
    user-select: none;
  }

  button{ 
    font-size: 28px;
    margin-top: 20px;
    width: 250px;
    height: 50px;
    align-self: center;
    background-color: rgb(80,79,96);
    color: rgb(108,99,255);
    border-radius: 4px;
    user-select: none;
  }
}
`;

const FormCur = styled.form`
display: flex;
justify-content: space-between;
background-color: whitesmoke;
border-bottom: 2px groove white;
padding: 15px;


  input{
    border-radius: 5px;
    background-color: rgb(90, 79, 96);
    color: rgb(141, 255, 11);
    margin: 5px 5px;
    border-bottom: 4px groove rgb(141, 255 , 11);
    outline: none;
    padding: 5px;
    width: 230px;
    font-size: 18px;
  }

  select {
    width: 140px;
    height: 40px;
    border-radius: 5px;
    background-color: rgb(90, 79, 96);
    color: rgb(141, 255, 11);
    margin: 5px 5px;
    outline: none;
    font-size: 18px;
    padding: 5px;
  }

  button {
    width: 140px;
    height: 80px;
    border-radius: 8px;
    text-transform: uppercase;
    background-color: rgb(80,79,96);
    color: rgb(141,208,112);
    font-size: 14px;
    font-weight: 800;
    transition: all 0.4 ease-in-out;
    :hover{
    background-color: rgb(141,208,112); 
    color: rgb(80,79,96);
    transform: scale(0.9);
  }
  }
`;

const Hder = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  border-bottom: 2px groove white;
`;

const Img = styled.img`
  width: 20%;
  padding: 25px;
`;

const Span = styled.span`
margin: 0 10px;
`;

const BRL = styled.span`
margin: 0 7px;
font-weight: 700;
`;

const Sfooter = styled.footer`
  display: flex;
  justify-content:space-between;
  width: 100vw;
  background-color: rgb(80,79,96);
  color: rgb(141,208,112);
  position: absolute;
  bottom: 0%;
`;

const Ssocial = styled.div`
  padding: 10px;

  h3{
    font-size: 20px;
  }
  a{
    color: rgb(141,208,112);
    border-radius:  50%;
    /* box-shadow: 0 -5px 2px whitesmoke; */
  }

  .icon-social-midia {
   width: 40px;
   height: 40px;
  }
`;

const Sdiv = styled.div`
  display: flex;
  flex-flow: row nowrap center;
  justify-content: space-between;
  width: 100%;
`;

const Sdata = styled.div`
  padding: 10px;
  text-align: center;
`;

const Syear = styled.p`
text-align: center;
margin-right: 18%;
margin-top: 30px;
`;

export {
  Main,
  FormCur,
  Hder,
  Img,
  Span,
  BRL,
  Sfooter,
  Ssocial,
  Sdata,
  Sdiv,
  Syear,
};
