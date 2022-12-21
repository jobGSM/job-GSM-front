import styled from "styled-components";

export const Container = styled.div`
  height: 5vw;
  border-bottom: 2px solid #dcdcdc;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

export const Vontainer = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoTitle = styled.p`
  font-size: 40px;
  cursor: pointer;
  font-weight: 700;
`;

export const ButtonWrap = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`;

export const JoinButton = styled.button`
  margin: 0;
  padding: 0;
  font-size: 25px;
  width: 100px;
  background: none;
  border: none;
  padding-bottom: 3px;
  cursor: pointer;
  &:hover {
    padding: 0;
    border-bottom: 3px solid #00a8ff;
  }
`;

export const LogoWrap = styled.div`
  width: 630px;
  justify-content: space-between;
  display: flex;
`;

export const SearchInput = styled.input`
  width: 500px;
  height: 45px;
  font-size: 20px;
  padding-left: 20px;
  &:focus {
  }
`;
