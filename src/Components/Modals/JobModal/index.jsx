import * as S from "./style";
import React, { useState } from "react"; // css import
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import "./style.css";

const JobModal = ({ setAddJob }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <S.Container>
      <S.JobModal>
        <S.TitleWrap>
          <S.PostJob>공고 올리기</S.PostJob>
          <S.CloseButton
            onClick={() => {
              setAddJob(false);
            }}
          >
            X
          </S.CloseButton>
        </S.TitleWrap>
        <S.PostJobInfor>
          <S.JobInforInput
            height="2vw"
            placeholder="제목을 입력해 주세요."
          ></S.JobInforInput>
          <S.JobTextarea placeholder="자세한 이야기를 적어주세요. (최대 50글자)"></S.JobTextarea>
          <S.JobText>모집 기간을 선택해주세요.</S.JobText>
          <S.JobText>시작일</S.JobText>
          <DatePicker
            className="DatePicker"
            dateFormat="yyyy년 MM월 dd일"
            locale={ko}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
          />
          <S.JobText>마감일</S.JobText>
          <DatePicker
            className="DatePicker"
            dateFormat="yyyy년 MM월 dd일"
            locale={ko}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
          />
          <S.PostButton>등록하기</S.PostButton>
        </S.PostJobInfor>
      </S.JobModal>
    </S.Container>
  );
};

export default JobModal;
