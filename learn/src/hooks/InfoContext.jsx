import { createContext } from "react";

export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const info = {
    name: "Yuvaraj",
    age: 25,
    profession: "Software Developer",
  };

  return (
    <InfoContext.Provider value={info}>
      {children}
    </InfoContext.Provider>
  );
};