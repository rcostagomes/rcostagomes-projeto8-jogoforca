import styled from "styled-components";

export const Main = styled.div`
  width: auto;
  height: auto;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const Center = styled.div`
  display: flex;
  img {
    width: 350px;
    height: auto;
  }
  
  button {
    margin-left: 70px;
    color: white;
    margin-top: 25px;
    background-color: green;
    width: 150px;
    height: 40px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #4caf50;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;

    :hover {
      background-color: #3e8e41;
    }

    :active {
      background-color: #3e8e41;
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }
  }
`;
export const Palavra = styled.div`
  width: 380px;
  margin-top: -40px;
  margin-bottom: 5px;
  margin-left: 500px;
  font-style: bold;
  font-size: 36px;
`;
export const Options = styled.div`
  margin-top: 20px;
  flex-wrap: bottom;
  width: 670px;
  align-items: center;
  justify-content: center;

  button {
    color: black;
    margin: 8px;
    background-color: #d0d0d0;
    width: 35px;
    height: 35px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    border: none;
    border-radius: 5px;
    box-shadow: 0 9px #999;

    :active {
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }
  }
`;
export const Footer = styled.div`
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  strong {
    margin-top: 7.5px;
  }
  input {
    background-color: white;
    border-radius: 10px;
    margin-top: 7.5px;
    margin-left: 15px;
    margin-right: 15px;
    width: 250px;
    height: 30px;
  }

  button {
    width: 70px;
    height: 30px;
    color: black;
    margin: 8px;
    background-color: green;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    border: none;
    border-radius: 5px;
    box-shadow: 0 9px #999;

    :active {
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }
  }
`;
