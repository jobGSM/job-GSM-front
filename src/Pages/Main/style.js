import styled from "styled-components";

export const Bumo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  width: 50vw;
  height: 3000px;
  flex-direction: column;
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

export const BoardWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: space-around;

  flex-wrap: wrap;
  align-content: flex-start;
`;

export const Board = styled.div`
  width: 300px;
  margin: 20px 0;
  height: 200px;
  border-radius: 30px;
  border: 3px solid #00a8ff;
  text-align: center;
  cursor: pointer;
`;

export const BoardTitle = styled.p`
  font-size: 20px;
  padding: 10px 0;
  color: #00a8ff;
`;

export const BoardDate = styled.p`
  padding: 12px 0 7px 0;
  font-size: 20px;
`;
