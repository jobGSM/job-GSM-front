import * as S from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();

  const [input, setInput] = useState("");

  return (
    <S.Container>
      <S.Vontainer>
        <S.LogoWrap>
          <S.LogoTitle
            onClick={() => {
              Navigate("/");
            }}
          >
            잡쥐
          </S.LogoTitle>
          <S.SearchInput
            placeholder="찾으시는 공고가 있으신가요?"
            onChange={(e) => {
              setInput(e.target.value);
              console.log(input);
            }}
          />
        </S.LogoWrap>
        <S.ButtonWrap>
          <S.JoinButton
            onClick={() => {
              Navigate("/SignIn");
            }}
          >
            로그인
          </S.JoinButton>
          <S.JoinButton
            onClick={() => {
              Navigate("/SignUp");
            }}
          >
            회원가입
          </S.JoinButton>
        </S.ButtonWrap>
      </S.Vontainer>
    </S.Container>
  );
};

export default Header;
