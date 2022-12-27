import * as S from "./style";
import { useContext, useState } from "react";
import axios from "axios";
import { Header } from "../../Components";
import { useNavigate } from "react-router-dom";
import { AnswerContext } from "../../Store/Answer";

const SignIn = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userSave, setUserSave] = useState(false);
  const { setAnswer } = useContext(AnswerContext);

  const loginData = {
    email,
    password,
  };

  const request = async () => {
    const answer = await axios({
      url: "http://10.82.17.167:8080/login", // 통신할 웹문서
      method: "post", // 통신할 방식
      data: loginData,
    });
    console.log(answer);
    setAnswer(answer);
  };

  return (
    <div>
      <Header name="이정우" />
      <S.Bumo>
        <S.SignInBox>
          <div>
            <S.SignUpTitle>로그인</S.SignUpTitle>
          </div>
          <S.InputWrap>
            <S.UserInput
              placeholder="이메일을 입력해주세요."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></S.UserInput>
            <S.UserInputPassword
              placeholder="비밀번호를 입력해주세요."
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></S.UserInputPassword>
            <S.SignUpButton
              onClick={() => {
                console.log(loginData);
                request();
              }}
            >
              잡쥐 시작하기
            </S.SignUpButton>
            <S.MoveSignUp
              onClick={() => {
                Navigate("/signUp");
              }}
            >
              아직 회원이 아니신가요?
            </S.MoveSignUp>
          </S.InputWrap>
        </S.SignInBox>
      </S.Bumo>
    </div>
  );
};

export default SignIn;
