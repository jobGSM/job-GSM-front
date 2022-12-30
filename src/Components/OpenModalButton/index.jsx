import { useContext } from "react";
import { toast } from "react-toastify";
import { AnswerContext } from "../../Store/Answer";
import * as S from "./style";

const OpenModalButton = ({ setAddJob }) => {
  const { isLogin, setIsLogin } = useContext(AnswerContext);

  return (
    <S.AddJobButton
      onClick={() => {
        if (!isLogin) {
          toast.error("로그인을 해주세요.");
        } else {
          setAddJob(true);
          setIsLogin(true);
        }
      }}
    >
      +
    </S.AddJobButton>
  );
};

export default OpenModalButton;
