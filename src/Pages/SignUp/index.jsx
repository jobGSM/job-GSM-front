import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../Components";
import * as S from "./style";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [grade, setGrade] = useState("");
  const [data, setData] = useState();
  const [compare, setCompare] = useState();

  const userData = {
    name: name,
    email: email,
    password: password,
    grade: grade,
  };

  const request = async () => {
    await axios({
      url: "http://10.82.18.227:3000/signup", // 통신할 웹문서
      method: "get", // 통신할 방식
    });
    setData(data);
  };

  const comparePassword = () => {
    if (password === checkPassword) {
      setCompare(true);
    } else {
      setCompare(false);
    }
  };

  const resultCompare = () => {
    if (compare === true) {
      return <S.Comparetitle>일치</S.Comparetitle>;
    } else {
      return <S.Comparetitle>불일치</S.Comparetitle>;
    }
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
              <S.UserInput
                placeholder="비밀번호를 입력해주세요"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></S.UserInput>
              <S.UserInput
                placeholder="비밀번호 확인"
                type="password"
                onChange={(e) => {
                  setCheckPassword(e.target.value);
                  comparePassword();
                }}
              ></S.UserInput>

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
                  window.location.href = "/";
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
