import React, { createContext, useState } from "react";

export const AnswerContext = createContext();

const UserStore = (prop) => {
  const [answer, setAnswer] = useState("hello");

  return (
    <AnswerContext.Provider value={{ answer, setAnswer }}>
      {prop.children}
    </AnswerContext.Provider>
  );
};

export default UserStore;
