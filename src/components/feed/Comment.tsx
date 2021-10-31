import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Captions = styled.div`
  min-height: 18px;
  margin-bottom: 4px;
  a {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const User = styled.span`
  color: ${(props) => props.theme.fontColor};
  font-weight: 600;
  padding: 0px 5px 0px 4px;
`;
type Props = {
  author: string;
  payload: string;
};

const Comment = ({ author, payload }: Props) => {
  const splitedPayload = payload.split(" ").map((word, index) =>
    /#[\w]+/g.test(word) ? (
      <Link key={index} to={`/hashtags/${word}`}>
        {word + " "}
      </Link>
    ) : (
      <React.Fragment key={index}>{word + " "}</React.Fragment>
    )
  );
  console.log(splitedPayload);
  return (
    <Captions>
      <User>{author}</User>
      <span>{splitedPayload}</span>
    </Captions>
  );
};

export default Comment;
