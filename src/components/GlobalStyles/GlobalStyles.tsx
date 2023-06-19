import React, { ReactNode } from "react";
import "./GlobalStyles.scss";
import { TypeOfChildren } from "../TypeOfChildren/TypeOfChildren";

const GlobalStyles = ({ children }: TypeOfChildren): JSX.Element => {
  return <>{children}</>;
};

export default GlobalStyles;
