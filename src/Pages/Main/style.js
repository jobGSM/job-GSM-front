import styled from "styled-components";

export const Bumo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const Voantainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;

export const Vvontainer = styled.div`
  width: 1200px;
  height: 100px;
  display: flex;
  margin: 0 auto;
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
  margin-bottom: 30px;
`;

export const JobsWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
`;

export const BoardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-column-gap: auto;
  grid-gap: 20px 30px;
  width: 100%;
  margin: 0 auto;
`;

export const Board = styled.div`
  width: 100%;
  height: 200px;
  margin: 0 auto;
  border-radius: 30px;
  border: 3px solid #00a8ff;
  text-align: center;
  cursor: pointer;
`;

export const BoardTitle = styled.p`
  font-size: 20px;
  padding: 6px 0;
  color: #00a8ff;
`;

export const BoardDate = styled.p`
  padding: 12px 0 7px 0;
  font-size: 20px;
`;
