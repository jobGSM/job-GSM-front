import * as S from "./style";
import { Header, JobModal, OpenModalButton, JobInfor } from "../../Components";
import { useState, useEffect, useContext } from "react";
import { AnswerContext } from "../../Store/Answer";
import axios from "axios";
import React from "react";

const Main = () => {
  const [showBox, setShowBox] = useState(false);
  const [addJob, setAddJob] = useState(false);
  const { boards, setBoards, setIndex } = useContext(AnswerContext);
  const getBoards = async () => {
    const { data } = await axios({
      url: "http://10.82.19.102:8080/board/boards", // 통신할 웹문서
      method: "get",
    });
    setBoards(data);
  };

  useEffect(() => {
    getBoards();
  }, []);

  return (
    <>
      {showBox && <JobInfor setShowBox={setShowBox}></JobInfor>}
      {addJob && <JobModal setAddJob={setAddJob}>X</JobModal>}
      <Header />
      <S.Bumo>
        <S.TitleWrap>
          <S.IntroBox>
            <div>
              <S.IntroTitle>인재를 찾고 계신가요?</S.IntroTitle>
              <S.IntroMainTitle>잡쥐에서</S.IntroMainTitle>
              <S.IntroTitleWrap>
                <S.chlwkddn padding="20px" color="#fff">
                  좋은 인재를
                </S.chlwkddn>
                <S.chlwkddn color="#ffff2b"> Pick</S.chlwkddn>
                <S.chlwkddn color="#fff">하세요 .</S.chlwkddn>
              </S.IntroTitleWrap>
              <S.IntroLast>
                잡쥐는 GSM인들은 누구나 사용할수있는 구인구직겸 공고모집 사이트
                입니다 .
              </S.IntroLast>
              <S.IntroLast>지금 잡쥐를 이용해보세요 .</S.IntroLast>
            </div>
          </S.IntroBox>
        </S.TitleWrap>
        <S.Container>
          <S.Voantainer>
            <S.Vvontainer>
              <S.JobTitle>지금까지 올라온 공고들이에요.</S.JobTitle>
              <S.BoardWrap>
                {boards.map((board, index) => (
                  <S.Board
                    key={board.boardId}
                    onClick={() => {
                      setShowBox(true);
                      setIndex(index);
                    }}
                  >
                    <S.BoardTitle>{board.boardTitle}</S.BoardTitle>
                    <p>
                      작성자 : {board.boardGrade} {board.boardWriter}
                    </p>
                    <hr />
                    <S.BoardDate>기한</S.BoardDate>
                    <S.BoardDate>
                      {board.boardStartDate} ~ {board.boardEndDate}
                    </S.BoardDate>
                    <S.BoardDate>
                      모집인원: {board.boardApplicant}명
                    </S.BoardDate>
                  </S.Board>
                ))}
              </S.BoardWrap>
            </S.Vvontainer>
          </S.Voantainer>

          <OpenModalButton setAddJob={setAddJob} />
        </S.Container>
      </S.Bumo>
    </>
  );
};

export default Main;
