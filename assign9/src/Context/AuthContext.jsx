import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthContextprovider = ({ children }) => {
  const [boolen, setBoolen] = useState(true);
  const handlechanger = () => {
    setBoolen(boolen ? false : true);
    // console.log(boolen);
  };
  return (
    <Auth.Provider value={{ boolen, handlechanger }}>{children}</Auth.Provider>
  );
};
