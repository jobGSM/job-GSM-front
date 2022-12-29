import { useContext } from "react";
import { AnswerContext } from "../../../Store/Answer";
import * as S from "./style";

const JobInfor = ({ setShowBox }) => {
  const { index, boards } = useContext(AnswerContext);
  return (
    <>
      <S.Container>
        <S.ContentsWrap>
          <S.JobTitleWrap>
            <S.CloseJobInfor
              onClick={() => {
                setShowBox(false);
              }}
            >
              X
            </S.CloseJobInfor>
            <S.JObTitle>{boards[index].boardTitle}</S.JObTitle>
            <p>
              기한 : {boards[index].boardStartDate} ~{" "}
              {boards[index].boardEndDate}
            </p>
          </S.JobTitleWrap>
          <S.ShowBoardContent>
            <S.BoardStory>{boards[index].boardContent}</S.BoardStory>
          </S.ShowBoardContent>
          <S.FooterP>작성자 : {boards[index].boardWriter}</S.FooterP>
          <S.FooterP> 모집인원 : {boards[index].boardApplicant} 명</S.FooterP>
        </S.ContentsWrap>
      </S.Container>
    </>
  );
};

export default JobInfor;
