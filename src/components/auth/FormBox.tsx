import React from "react";
import styled from "styled-components";
import { BaseBox } from "../shared";

type Props = {
  children: React.ReactNode;
};
const Box = styled(BaseBox)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 0px 20px 0px;
  margin-bottom: 10px;
  form {
    margin-top: 26px;
    width: 268px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  div::first-child {
    margin: 1.5px;
  }
  p {
    font-family: "Style Script", cursive;
    font-weight: bold;
    font-size: 50px;
  }
`;

const FormBox = ({ children }: Props) => {
  return <Box>{children}</Box>;
};

export default FormBox;
