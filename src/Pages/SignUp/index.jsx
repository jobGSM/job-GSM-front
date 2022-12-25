import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../Components";
import * as S from "./style";
import { toast } from "react-toastify";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [grade, setGrade] = useState("1학년");
  const [data, setData] = useState();
  const [compare, setCompare] = useState(null);

  const userData = {
    name,
    email,
    password,
    grade,
  };

  const request = async () => {
    await axios({
      url: "http://10.82.18.191:8080/signup", // 통신할 웹문서
      method: "post", // 통신할 방식
      data: userData,
    });
  };

  const comparePassword = () => {
    if (!checkPassword) {
      return setCompare(null);
    } else if (password === checkPassword) {
      return setCompare(true);
    } else {
      return setCompare(false);
    }
  };

  const compareResult = () => {
    if (compare === null) {
      return;
    } else if (compare === true) {
      return <S.Truetitle>일치</S.Truetitle>;
    } else if (compare === false) {
      return <S.Falsetitle>불일치</S.Falsetitle>;
    }
  };

  useEffect(() => {
    console.log(compare);
    comparePassword();
  }, [checkPassword]);

  return (
    <>
      <Header />
      <S.Bumo>
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
                console.log(compare);
              }}
            ></S.UserInput>
            {compareResult()}
            <S.ClassTitle>본인의 학년 / 직급을 선택해주세요 .</S.ClassTitle>
            <S.Select
              onChange={(e) => {
                setGrade(e.target.value);
              }}
            >
              <S.Grade>1학년</S.Grade>
              <S.Grade>2학년</S.Grade>
              <S.Grade>3학년</S.Grade>
              <S.Grade>선생님</S.Grade>
            </S.Select>
            <S.SignUpButton
              onClick={() => {
                if (compare === false || compare === null) {
                  toast.error("비밀번호를 다시 확인해주세요.");
                } else {
                  toast.success("로그인 성공");
                  console.log(compare);
                  console.log(userData);
                  request();
                }

                // window.location.href = "/";
                // alert("회원가입 성공! 로그인을 해주세요.");
              }}
            >
              가입
            </S.SignUpButton>
          </S.UserInformaitionWrap>
        </S.SignUpBox>
      </S.Bumo>
    </>
  );
};

export default SignUp;
