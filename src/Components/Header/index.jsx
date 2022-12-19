import * as S from "./style";
import { useState } from "react";

const Header = () => {
  const [input, setInput] = useState("");

  const dlwjddn = () => {
    console.log("sex");
  };

  return (
    <S.Container>
      <S.Vontainer>
        <S.LogoTitle>잡쥐</S.LogoTitle>
        <S.SearchInput
          placeholder="찾으시는 심부름이 있나요?"
          onChange={(e) => {
            setInput(e.target.value);
            console.log(input);
          }}
          onKeyPress={(event) => if(event.keyCode===13)}
        />
        <S.ButtonWrap>
          <S.JoinButton>로그인</S.JoinButton>
          <S.JoinButton>회원가입</S.JoinButton>
        </S.ButtonWrap>
      </S.Vontainer>
    </S.Container>
  );
};

export default Header;
