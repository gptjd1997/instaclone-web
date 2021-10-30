import styled from "styled-components";

const Button = styled.input`
  text-align: center;
  margin: 6px 0px;
  color: white;
  border-radius: 5px;
  border: 1 px solid transparent;
  display: block;
  font-weight: 600;
  font-size: 14px;
  width: 100%;
  padding: 11px 8px 10px 8px;
  background-color: ${(props) => props.theme.accent};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;

export default Button;
