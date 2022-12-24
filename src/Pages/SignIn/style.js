import styled from "styled-components";

export const Bumo = styled.div``;

export const SignInBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 25vw;
  height: 35vw;
  border: 1px solid #747474;
  border-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const SignUpTitle = styled.p`
  font-size: 30px;
  padding-top: 25px;
  margin-bottom: 40px;
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const UserInput = styled.input`
  width: 18vw;
  height: 2vw;
  margin-bottom: 30px;
  border: none;
  font-family: sans-serif;

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

export const MoveSignUp = styled.p`
  text-align: center;
  padding-top: 14px;
  color: #777777;
  font-size: 15px;
  cursor: pointer;
`;
