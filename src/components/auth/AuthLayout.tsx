import { useReactiveVar } from "@apollo/client";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { darkModeVar, disableDarkMode, enableDarkMode } from "../../apollo";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

type Props = {
  children: React.ReactNode;
};

const Footer = styled.footer`
  background-color: #8080806a;
  width: 100%;
  padding: 25px 30px;
  position: fixed;
  bottom: 0;
  box-shadow: ${(props) => props.theme.boxShadow_2};
`;

const DarkModeBtn = styled.span`
  background-color: ${(props) => props.theme.changeColor};
  color: ${(props) => props.theme.bgColor};
  padding: 13px 10px;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.boxShadow_2};
  cursor: pointer;
`;
const IconBox = styled.span`
  padding-right: 10px;
`;

const AuthLayout = ({ children }: Props) => {
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <Container>
      <div>{children}</div>
      <Footer>
        <DarkModeBtn onClick={darkMode ? disableDarkMode : enableDarkMode}>
          <IconBox>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </IconBox>
          <span>{darkMode ? "LightMode" : "DarkMode"}</span>
        </DarkModeBtn>
      </Footer>
    </Container>
  );
};
export default AuthLayout;
