import styled from "styled-components";

export const Bumo = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SignInBox = styled.div`
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  width: 25vw;
  height: 35vw;
  border: 1px solid #747474;
  border-radius: 15px;
`;

export const SignUpTitle = styled.p`
  font-size: 30px;
  padding-top: 25px;
`;

export const InputWrap = styled.div`
  width: 100%;
  height: 21vw;
`;

export const UserInput = styled.input`
  width: 18vw;
  height: 2vw;
  margin-bottom: 30px;
  border: none;
  font-size: 16px;
  border-bottom: 1px solid #000;
  &:focus {
    outline: none;
    border-bottom: 3px solid #00a8ff;
  }
`;

export const UserInputPassword = styled.input`
  width: 18vw;
  height: 2vw;
  font-size: 16px;
  font-family: sans-serif;
  margin-bottom: 20px;

  border: none;
  border-bottom: 1px solid #000;
  &:focus {
    outline: none;
    border-bottom: 3px solid #00a8ff;
  }
`;

export const SignUpButton = styled.button`
  width: 18vw;
  height: 4vw;
  font-size: 20px;
  margin-top: 30px;
  background-color: #00a8ff;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;
