import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AnswerContext } from "../../../Store/Answer";
import * as S from "./style";

const JobInfor = ({ setShowBox }) => {
  const { index, boards } = useContext(AnswerContext);
  const boardId = index;
  console.log(boardId);
  const [showApplicants, setShowApplicants] = useState();

  const request = async () => {
    await axios({
      url: "http://10.82.19.102:8080/board/application",
      method: "post",
      data: boardIdd,
      withCredentials: true,
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    });
    applicant();
  };

  const applicant = async () => {
    const { data } = await axios({
      url: `http://10.82.19.102:8080/board/application?boardId=${boardId}`,
      method: "get",
    });
    console.log("dlwjddn");
    console.log(data);
    setShowApplicants(data);
  };

  useEffect(() => {
    applicant();
  }, []);

  const boardIdd = {
    boardId,
  };

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
            <S.ApplicantWrap>
              <S.ApplicantList>지원자 명단입니다.</S.ApplicantList>
              {showApplicants &&
                showApplicants.map((Applicant) => (
                  <S.ApplicantList>
                    {Applicant.grade} {Applicant.name}
                  </S.ApplicantList>
                ))}
            </S.ApplicantWrap>
            <S.ButtonWrap>
              <S.JoinButton onClick={request}>신청하기</S.JoinButton>
            </S.ButtonWrap>
          </S.ShowBoardContent>
          <S.FooterP>작성자 : {boards[index].boardWriter}</S.FooterP>
          <S.FooterP> 모집인원 : {boards[index].boardApplicant} 명</S.FooterP>
        </S.ContentsWrap>
      </S.Container>
    </>
  );
};

export default JobInfor;
