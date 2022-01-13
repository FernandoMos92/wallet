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
    margin: 5px 5px;
  }

  select {
    margin: 5px 5px;
  }

  button {
    width: 220px;
    height: 50px;
    border-radius: 5px;
    text-transform: uppercase;
    background-color: rgb(80,79,96);
    color: rgb(141,208,112);
    font-weight: 800;
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

export {
  Main,
  FormCur,
  Hder,
  Img,
  Span,
  BRL,
};
