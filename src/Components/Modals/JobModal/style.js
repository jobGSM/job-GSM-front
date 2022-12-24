import styled from "styled-components";

export const Sex = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  overflow-y: overlay;
`;

export const JobModal = styled.div`
  width: 30vw;
  height: 30vw;
  z-index: 999;
  border-radius: 30px;
  background-color: red;
`;

export const CloseButton = styled.button`
  width: 100px;
  height: 100px;
`;
