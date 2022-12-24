import styled from "styled-components";

export const Bumo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  width: 60vw;
  height: 3000px;
  flex-direction: column;
  background-color: aqua;
`;

export const IntroBox = styled.div`
  width: 100%;
  height: 30%;
  padding-left: 24px;
  display: flex;
  justify-content: center;
`;

export const IntroTitle = styled.p`
  font-size: 25px;
  padding: 20px 0;
  color: #fff;
`;
export const IntroMainTitle = styled.p`
  font-size: 45px;
  padding-bottom: 25px;
  color: #fff;
`;
export const chlwkddn = styled.p`
  font-size: 45px;
  color: ${(prop) => prop.color};
  padding-right: ${(prop) => prop.padding};
`;

export const IntroTitleWrap = styled.div`
  display: flex;
  padding-bottom: 35px;
`;

export const IntroLast = styled.p`
  font-size: 25px;
  color: #fff;
  padding-bottom: 30px;
`;

export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #00a8ff;
  margin-bottom: 40px;
`;

export const JobTitle = styled.p`
  font-size: 30px;
`;

export const JobsWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
`;
