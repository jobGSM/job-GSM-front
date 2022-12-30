import React, { createContext, useState } from "react";

export const AnswerContext = createContext();

const UserStore = (prop) => {
  const [answer, setAnswer] = useState("hello");
  const [isHi, setIsHi] = useState(false);
  const [boards, setBoards] = useState([]);
  const [index, setIndex] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState();

  return (
    <AnswerContext.Provider
      value={{
        answer,
        setAnswer,
        setIsHi,
        isHi,
        boards,
        setBoards,
        index,
        setIndex,
        isLogin,
        setIsLogin,
        userInfo,
        setUserInfo,
      }}
    >
      {prop.children}
    </AnswerContext.Provider>
  );
};

export default UserStore;
