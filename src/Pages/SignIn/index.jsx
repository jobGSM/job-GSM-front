import * as S from "./style";
import { Header } from "../../Components";

const SignIn = () => {
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
              <S.UserInput placeholder="아이디를 입력해주세요."></S.UserInput>
              <S.UserInputPassword
                placeholder="비밀번호를 입력해주세요."
                type="password"
              ></S.UserInputPassword>
              <S.SignUpButton>잡쥐 시작하기</S.SignUpButton>
              <S.Wjdalstj>아직 회원이 아니신가요?</S.Wjdalstj>
            </S.InputWrap>
          </S.SignInBox>
        </S.Container>
      </S.Bumo>
    </div>
  );
};

export default SignIn;
