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
  font-size: 30px;
`;

export const ShowBoardContent = styled.div`
  margin: 0 auto;
  height: 80%;
  align-items: center;
  text-align: center;
  display: flex;

  padding-top: 40px;
  flex-direction: column;
`;

export const BoardStory = styled.p`
  font-size: 20px;
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

// export const DDiv = styled.div`
//   width: 100%;
//   height: 10vw;
//   display: flex;
//   align-items: center;
//   background-color: aqua;
// `;

export const JoinButton = styled.button`
  width: 8vw;
  height: 3vw;
  background-color: #00a8ff;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  margin-bottom: 30px;
  color: #fff;
  cursor: pointer;
  margin-right: 20px;
`;

export const Text = styled.p`
  color: black;
`;

export const ButtonWrap = styled.div`
  position: absolute;
  top: 75%;
  transform: translateY(-50%);
`;

export const ApplicantWrap = styled.div`
  text-align: center;
  width: 15vw;
  height: 15vw;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid #00a8ff;
  position: absolute;
  margin-bottom: 20px;
`;

export const ApplicantList = styled.p`
  font-size: 20px;
  padding: 10px 0;
`;
