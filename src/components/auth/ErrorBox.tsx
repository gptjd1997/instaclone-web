import styled from "styled-components";

type Props = {
  hasError?: Boolean;
};

const ErrorBox = styled.div<Props>`
  color: ${(props) => (!props.hasError ? "#ed4056" : props.theme.accent)};
  text-align: center;
  margin: 20px 0px 10px 0px;
`;
export default ErrorBox;
