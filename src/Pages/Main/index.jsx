import * as S from "./style";
import { Header, JobModal, OpenModalButton } from "../../Components";
import { useState } from "react";
const Main = () => {
  const [addJob, setAddJob] = useState(false);
  return (
    <>
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
                  좋은 인재를{" "}
                </S.chlwkddn>
                <S.chlwkddn color="#94FF92"> Pick</S.chlwkddn>
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
          <S.JobTitle>지금까지 올라온 공고들이에요.</S.JobTitle>
          <OpenModalButton setAddJob={setAddJob} />
        </S.Container>
      </S.Bumo>
    </>
  );
};

export default Main;
