import styled from "styled-components";

type Props = {
  hasError?: Boolean;
  type: string;
  placeholder?: string;
  theme: any;
};

const Input = styled.input<Props>`
  &::placeholder {
    color: ${(props) => props.theme.placeholderColor};
  }
  font-size: 12px;
  margin-bottom: 6px;
  width: 100%;
  padding: 11px 8px 10px 8px;
  background-color: ${(props) => props.theme.inputColor};
  border: 1px solid
    ${(props) => (props.hasError ? "tomato" : props.theme.borderColor)};
  border-radius: 3px;
  color: rgb(38, 38, 38);
  --webkit-animation {
  }
  &:focus {
    border-color: rgb(149, 149, 149);
  }
`;

export default Input;
