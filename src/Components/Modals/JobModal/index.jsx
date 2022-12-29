import * as S from "./style";
import React, { useContext, useState } from "react"; // css import
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import "./style.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { AnswerContext } from "../../../Store/Answer";

const JobModal = ({ setAddJob }) => {
  const [bboardStartDate, setBoardStartDate] = useState(new Date());
  const [bboardEndDate, setBoardEndDate] = useState(new Date());
  const [boardTitle, setBoardTitle] = useState("");
  const [boardContent, setBoardContent] = useState("");
  const [boardApplicant, setBoardApplicant] = useState();
  const [isInput, setIsInput] = useState(false);
  const boardWriter = localStorage.getItem("name");
  const boardGrade = localStorage.getItem("grade");
  const boardStartDate = bboardStartDate.toLocaleDateString();
  const boardEndDate = bboardEndDate.toLocaleDateString();
  const { boards, setBoards } = useContext(AnswerContext);
  const request = async () => {
    await axios({
      url: "http://10.82.19.102:8080/board", // 통신할 웹문서
      method: "post", // 통신할 방식
      data: postJobData,
    });
  };

  const boardInformation = async () => {
    const { data } = await axios({
      url: "http://10.82.19.102:8080/board/boards", // 통신할 웹문서
      method: "get",
    });
    console.log("하이");
    console.log(data);
    setBoards(data);
  };
  const postJobData = {
    boardWriter,
    boardGrade,
    boardTitle,
    boardContent,
    boardApplicant,
    boardStartDate,
    boardEndDate,
  };

  const check = () => {
    if (
      boardTitle === "" ||
      boardContent === "" ||
      bboardEndDate === "" ||
      bboardStartDate === "" ||
      boardApplicant === ""
    ) {
      toast.error("비어있는 칸이 있어요");
    } else {
      toast.success("공고가 성공적으로 올라갔어요.");
      request();
      setBoards([...boards, postJobData]);
      setAddJob(false);
    }
  };
  console.log(boardWriter, boardGrade);
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
              type="number"
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
