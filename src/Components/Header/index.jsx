import * as S from "./style";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnswerContext } from "../../Store/Answer";
import { toast } from "react-toastify";
import axios from "axios";

const Header = () => {
  const Navigate = useNavigate();
  const { isHi, setIsHi, setIsLogin, userInfo, setUserInfo } =
    useContext(AnswerContext);
  const [setInput] = useState("");

  const logout = () => {
    localStorage.clear();
    toast.success("로그아웃이 되었어요.");
    setIsLogin(false);
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
        setIsHi(true);
        setIsLogin(true);
        console.log(data);
        setUserInfo({
          name: data.name,
          grade: data.grade,
        });
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
              {userInfo?.grade} {userInfo?.name}님
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
