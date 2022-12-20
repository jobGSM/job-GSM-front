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
export const SignUpBox = styled.div`
  align-items: center;
  flex-direction: column;
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

export const UserInformaitionWrap = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
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

export const ClassTitle = styled.p`
  font-size: 19px;
  padding-bottom: 20px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

export const ClassButton = styled.button`
  font-size: 18px;
  width: 5vw;
  height: 2vw;
  background: none;
  border: none;
  border-bottom: 1px solid #747474;
  margin-bottom: 20px;
  padding-bottom: 3px;

  &:hover {
    padding-bottom: 0px;
    border-bottom: 3px solid #00a8ff;
  }
`;

export const Teacher = styled.button`
  width: 70%;
  font-size: 18px;
  height: 2vw;
  background: none;
  border: none;
  border-bottom: 1px solid #747474;
  margin-top: 20px;
  padding-bottom: 3px;
  &:hover {
    padding-bottom: 0px;
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

export const Select = styled.select`
  margin: 0;
  min-width: 0;
  display: block;
  width: 18vw;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  &:focus {
    border-color: red;
  }
`;

export const Grade = styled.option`
  font-size: 20px;
`;
