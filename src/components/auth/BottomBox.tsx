import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseBox } from "../shared";

type Props = {
  cta: string;
  link: string;
  linkText: string;
};

const Box = styled(BaseBox)`
  width: 100%;
  padding: 10px 0px;
  text-align: center;
  justify-content: center;
  p {
    margin: 15px;
  }
  span {
    color: ${(props) => props.theme.fontColor};
    margin-right: 4px;
  }
  a {
    color: ${(props) => props.theme.accent};
    text-decoration: none;
    font-weight: bolder;
  }
`;

const BottomBox = ({ cta, link, linkText }: Props) => {
  return (
    <Box>
      <p>
        <span>{cta}</span>
        <Link to={link}>{linkText}</Link>
      </p>
    </Box>
  );
};

export default BottomBox;
