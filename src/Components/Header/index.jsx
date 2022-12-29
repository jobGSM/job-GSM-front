import * as S from "./style";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnswerContext } from "../../Store/Answer";
import { toast } from "react-toastify";
import axios from "axios";

const Header = () => {
  const Navigate = useNavigate();
  const { answer } = useContext(AnswerContext);
  const { isHi, setIsHi, accessToken, refreshToken } =
    useContext(AnswerContext);
  const [input, setInput] = useState("");
  const [sexy, setSexy] = useState(null);

  const Tokens = {
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
  };

  const logout = () => {
    localStorage.clear();
    toast.success("로그아웃이 되었어요");
    setIsHi(false);
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) return;
    try {
      (async () => {
        const { data } = await axios({
          url: "http://10.82.19.102:8080/user",
          method: "get",
          withCredentials: true,
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
        });
        console.log(data);
        localStorage.setItem("name", data.name);
        localStorage.setItem("grade", data.grade);
        setIsHi(true);
        console.log("swx");
        setSexy(data);
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <S.Container>
      <S.Vontainer>
        <S.LogoWrap>
          <S.LogoTitle
            onClick={() => {
              Navigate("/");
              console.log("로고 클릭");
            }}
          >
            잡쥐
          </S.LogoTitle>
          <S.SearchInput
            placeholder="찾으시는 공고가 있으신가요?"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </S.LogoWrap>
        <S.ButtonWrap>
          {isHi ? (
            <S.UserName>
              {sexy?.grade} {sexy?.name}님
            </S.UserName>
          ) : (
            <S.JoinButton
              onClick={() => {
                Navigate("/SignIn");
              }}
            >
              로그인
            </S.JoinButton>
          )}
          {isHi && <S.LogOut onClick={logout}>로그아웃</S.LogOut>}
        </S.ButtonWrap>
      </S.Vontainer>
    </S.Container>
  );
};

export default Header;
