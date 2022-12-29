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
  padding: 0;
  margin: 0;
`;

export const ContentsWrap = styled.div`
  padding: 0;
  margin: 0;
  width: 30vw;
  height: 40vw;
  border-radius: 20px;
  background-color: #fff;
  border: 4px solid #00a8ff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const JobTitleWrap = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 5vw;
  border-bottom: 3px solid #00a8ff;
`;

export const JObTitle = styled.p`
  font-size: 40px;
`;

export const ShowBoardContent = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 80%;

  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;

export const BoardStory = styled.p`
  font-size: 25px;
`;

export const CloseJobInfor = styled.button`
  font-size: 40px;
  background: none;
  position: absolute;
  border: none;
  color: #00a8ff;
  right: 3vw;
  cursor: pointer;
`;

export const FooterP = styled.p`
  font-size: 20px;
`;
