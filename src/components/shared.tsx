import { useReactiveVar } from "@apollo/client";
import styled from "styled-components";
import { darkModeVar } from "../apollo";
import Chimstagram from "../images/Chimstagram.png";
import Darkmode_Chimstagram from "../images/Darkmode_Chimstagram.png";

export const BaseBox = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.boxColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: ${(props) => props.theme.boxShadow_1};
`;

const ChimstagramImage = styled.div<any>`
  width: 346px;
  height: 85px;
  background-image: ${(props) =>
    !props.darkMode ? `url(${Chimstagram})` : `url(${Darkmode_Chimstagram})`};
`;

export const ChimstagramLogo = () => {
  const darkMode = useReactiveVar(darkModeVar);
  return <ChimstagramImage darkMode={darkMode} />;
};
