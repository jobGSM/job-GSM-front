import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../Components";
import * as S from "./style";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setId] = useState("");
  const [password, setPassword] = useState("");
  const [grade, setGrade] = useState("");

  const userData = {
    name: name,
    email: email,
    password: password,
    grade: grade,
  };

  const request = () => {
    axios({
      url: "https://test/api/cafe/list/today", // 통신할 웹문서
      method: "post", // 통신할 방식
      data: userData,
    });
  };

  return (
    <div>
      <S.Bumo>
        <Header></Header>
        <S.Container>
          <S.SignUpBox>
            <S.SignUpTitle>회원가입</S.SignUpTitle>
            <S.UserInformaitionWrap>
              <S.UserInput
                placeholder="이름을 입력해주세요"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></S.UserInput>
              <S.UserInput
                placeholder="이메일을 입력해주세요"
                value={email}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              ></S.UserInput>
              <S.UserInputPassword
                placeholder="비밀번호를 입력해주세요"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></S.UserInputPassword>
              <S.UserInputPassword
                placeholder="비밀번호 확인"
                type="password"
              ></S.UserInputPassword>
              <S.ClassTitle>본인의 학년 / 직급을 선택해주세요 .</S.ClassTitle>
              <S.Select
                onChange={(e) => {
                  setGrade(e.target.value);
                }}
              >
                <S.Grade>1 학년</S.Grade>
                <S.Grade>2 학년</S.Grade>
                <S.Grade>3 학년</S.Grade>
                <S.Grade>선생님</S.Grade>
              </S.Select>
              <S.SignUpButton
                onClick={() => {
                  console.log(userData);
                }}
              >
                가입
              </S.SignUpButton>
            </S.UserInformaitionWrap>
          </S.SignUpBox>
        </S.Container>
      </S.Bumo>
    </div>
  );
};

export default SignUp;
