import styled from "styled-components";

export const Bumo = styled.div``;

export const SignUpBox = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 25vw;
  height: 35vw;
  border: 1px solid #747474;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  width: ${(props) => props.width};
  height: 2vw;
  margin-bottom: 30px;
  border: none;
  font-size: 20px;
  font-family: sans-serif;

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

export const Falsetitle = styled.p`
  font-size: 15px;
  color: red;
`;

export const Truetitle = styled.p`
  font-size: 15px;
  color: green;
`;

export const EmailCheckButton = styled.button`
  width: 2vw;
  height: 2vw;
`;

export const NormalDiv = styled.div`
  display: flex;
  width: 18vw;
  justify-content: space-between;
`;

export const CheckEmail = styled.div`
  width: 400px;
  height: 200px;
  z-index: 99999;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  text-align: center;
  border: 2px solid #00a8ff;
  border-radius: 30px;
  background-color: #fff;
`;

export const CheckEmailTitle = styled.p`
  font-size: 30px;
`;

export const CheckEmailCode = styled.input`
  margin-top: 20px;
  width: 200px;
  height: 40px;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const CheckEmailButton = styled.button`
  width: 150px;
  height: 30px;
`;

export const EmailDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Diiv = styled.div`
  justify-content: center;
  justify-content: space-between;
  width: 220px;

  display: flex;
`;

export const Bbutton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  color: #00a8ff;
  background-color: #fff;
  font-size: 30px;
  cursor: pointer;
`;
