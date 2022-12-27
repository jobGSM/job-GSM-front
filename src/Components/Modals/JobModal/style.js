import ReactDatePicker from "react-datepicker";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  overflow-y: overlay;
  text-align: center;
`;

export const JobModal = styled.div`
  width: 30vw;
  height: 37vw;
  z-index: 999;
  border-radius: 30px;
  background-color: #fff;
  position: relative;
  display: flex;
  border: 2px solid gray;
`;

export const PostJob = styled.p`
  font-size: 30px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  color: #00a8ff;
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
`;
export const PostJobInfor = styled.div`
  margin: 0 auto;
  width: 25vw;
  height: 30vw;
  position: absolute;
  border-radius: 30px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const JobInforInput = styled.input`
  width: 18vw;
  height: 2vw;
  font-size: ${(props) => props.fontSize};
  margin-top: 15px;
  margin-bottom: ${(props) => props.marginBottom};
`;

export const JobTextarea = styled.textarea`
  width: 18vw;
  height: 8vw;
  font-size: 17px;
  margin-bottom: 20px;
  resize: none;
`;

export const JobText = styled.p`
  font-size: 20px;
  padding-bottom: 10px;
`;

export const PostButton = styled.button`
  width: 18vw;
  height: 3vw;
  background-color: #00a8ff;
  font-size: 20px;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-top: 15px;
`;

export const TitleWrap = styled.div``;
