import * as S from "./style";
import { useState } from "react";
import axios from "axios";
import { Header } from "../../Components";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginData = {
    email,
    password,
  };

  const request = async () => {
    const answer = await axios({
      url: "http://10.82.18.191:8080/login", // 통신할 웹문서
      method: "post", // 통신할 방식
      data: loginData,
    });
    console.log(answer);
  };
  return (
    <div>
      <S.Bumo>
        <Header />
        <S.Container>
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
              <S.Wjdalstj
                onClick={() => {
                  Navigate("/signUp");
                }}
              >
                아직 회원이 아니신가요?
              </S.Wjdalstj>
            </S.InputWrap>
          </S.SignInBox>
        </S.Container>
      </S.Bumo>
    </div>
  );
};

export default SignIn;
