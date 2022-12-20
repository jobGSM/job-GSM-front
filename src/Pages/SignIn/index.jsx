import * as S from "./style";
import { Header } from "../../Components";

const SignIn = () => {
  return (
    <div>
      <S.Bumo>
        <Header />
        <S.Container>
          <S.SignInBox>
            <S.SignUpTitle>로그인</S.SignUpTitle>
            <S.InputWrap>
              <S.UserInput placeholder="아이디를 입력해주세요."></S.UserInput>
              <S.UserInputPassword placeholder="비밀번호를 입력해주세요."></S.UserInputPassword>
            </S.InputWrap>
          </S.SignInBox>
        </S.Container>
      </S.Bumo>
    </div>
  );
};

export default SignIn;
