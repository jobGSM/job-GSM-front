import * as S from "./style";
import React, { useState } from "react"; // css import
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import "./style.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const JobModal = ({ setAddJob }) => {
  const [bboardStartDate, setBoardStartDate] = useState(new Date());
  const [bboardEndDate, setBoardEndDate] = useState(new Date());
  const [boardTitle, setBoardTitle] = useState("");
  const [boardContent, setBoardContent] = useState("");
  const [boardApplicant, setBoardApplicant] = useState();
  const [isInput, setIsInput] = useState(false);

  const boardStartDate = bboardStartDate.toLocaleDateString();
  const boardEndDate = bboardEndDate.toLocaleDateString();

  const request = async () => {
    await axios({
      url: "http://10.82.19.102:8080/board", // 통신할 웹문서
      method: "post", // 통신할 방식
      data: postJobData,
    });
  };

  const boardInformation = async () => {
    const dlwjddn = await axios({
      url: "http://10.82.19.102:8080/board/boards", // 통신할 웹문서
      method: "get",
    });
    console.log("하이");
    console.log(dlwjddn);
  };
  const boardWriter = "허여준";
  const postJobData = {
    boardTitle,
    boardContent,
    boardApplicant,
    boardStartDate,
    boardEndDate,
    boardWriter,
  };

  const check = () => {
    let count = 0;
    if (
      boardTitle == "" ||
      boardContent == "" ||
      bboardEndDate == "" ||
      bboardStartDate == "" ||
      boardApplicant == ""
    ) {
      toast.error("비어있는 칸이 있어요");
    } else {
      toast.success("공고가 성공적으로 올라갔어요.");
      request();
      boardInformation();
    }
    // else {
    //   toast.error("제목을 입력해주세요");
    //   console.log("노입력");
    // }
    // if (boardApplicant) {
    //   count++;
    //   console.log("인원수 적힘");
    // } else {
    //   toast.error("인원수를 적어주세요");
    // }
    // if (boardContent) {
    //   count++;
    //   console.log("본문 적힘");
    // } else {
    //   toast.error("본문을 적어주세요");
    // }
    // if (bboardStartDate && bboardEndDate) {
    //   count++;
    //   console.log("날짜 성공");
    // } else {
    //   toast.error("날짜를 지정해주세요");
    // }
    // if (count === 4) {

    //   if (isInput) {
    //     toast.success("공고가 성공적으로 올라갔어요");
    //   } else {
    //     toast.error("응");
    //   }
    // }
    // if (count === 3) {
    //   setIsInput(true);
    // if (!isInput) {
    //   toast.error("날짜를 설정해주세요.");
    // } else {
    //   toast.success("등록이 완료되었어요.");
    //   console.log(postJobData);
    //   request();
    //   boardInformation();
    //   setAddJob(false);
    // }
    //}
  };
  return (
    <>
      <ToastContainer />
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
              fontSize="20px"
              onChange={(e) => {
                setBoardTitle(e.target.value);
              }}
            />
            <S.JobInforInput
              placeholder="모집할 인원수 (숫자만 적어주세요)"
              marginBottom="15px"
              fontSize="17px"
              onChange={(e) => {
                setBoardApplicant(e.target.value);
              }}
            />
            <S.JobTextarea
              placeholder="자세한 이야기를 적어주세요. (최대 200글자)"
              maxLength="200"
              onChange={(e) => {
                setBoardContent(e.target.value);
              }}
            />
            <S.JobText>모집 기간을 선택해주세요.</S.JobText>
            <S.JobText>시작일</S.JobText>
            <DatePicker
              className="DatePicker"
              dateFormat="yyyy년 MM월 dd일"
              locale={ko}
              selected={bboardStartDate}
              onChange={(date) => {
                setBoardStartDate(date);
                console.log(date.toLocaleDateString("ko-KR"));
              }}
              selectsStart
              startDate={bboardStartDate}
              endDate={bboardEndDate}
              minDate={new Date()}
            />
            <S.JobText>마감일</S.JobText>
            <DatePicker
              className="DatePicker"
              dateFormat="yyyy년 MM월 dd일"
              locale={ko}
              selected={bboardEndDate}
              onChange={(date) => {
                setBoardEndDate(date);
                console.log(date.toLocaleDateString("ko-KR"));
              }}
              selectsEnd
              startDate={bboardStartDate}
              endDate={bboardEndDate}
              minDate={bboardStartDate}
            />
            <S.PostButton
              onClick={() => {
                check();
              }}
            >
              등록하기
            </S.PostButton>
          </S.PostJobInfor>
        </S.JobModal>
      </S.Container>
    </>
  );
};

export default JobModal;
