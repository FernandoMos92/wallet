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
    text-shadow: 1px 1px 1px #FFF;
  }
}
`;

export default Main;
