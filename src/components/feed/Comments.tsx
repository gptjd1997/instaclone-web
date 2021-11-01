import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled, { DefaultTheme } from "styled-components";
import { useForm } from "react-hook-form";
import Comment from "./Comment";
import { gql, useMutation } from "@apollo/client";

const FooterComments = styled.div`
  display: flex;
  flex-flow: column;
  padding: 0px 16px;
`;
const CreatedAt = styled.time`
  height: 19px;
  width: 100%;
  margin-bottom: 16px;
  font-size: 10px;
  color: ${(props) => props.theme.changeColor};
  padding: 3px;
`;
const WriteComment = styled.div`
  min-height: 53px;
  padding: 6px 16px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  align-items: center;
  max-height: 93px;
  flex-flow: row;
  form {
    display: flex;
    align-items: center;
  }
  input {
    padding: 5px;
    color: ${(props) => props.theme.accent};
    font-weight: 600;
    cursor: pointer;
  }
`;
type areaProps = {
  areaHeight: string;
  theme: DefaultTheme;
};
const CommentArea = styled.textarea`
  min-height: 18px;
  max-height: 72px;
  height: ${(props: areaProps) => props.areaHeight};
  resize: none;
  border: none;
  background-color: inherit;
  color: ${(props: areaProps) => props.theme.fontColor};
  outline: none;
  margin-left: 16px;
  white-space: pre-wrap;
  padding: 0px;
`;

type Props = {
  photoId: number;
  caption: string;
  comments?: any;
  createdAt: string;
  commentNumber: number;
  user: {
    username: string;
    avatar?: string;
  };
};

const CREATE_COMMENT_MUTATION = gql`
  mutation ($payload: String!, $photoId: Int!) {
    createComment(payload: $payload, photoId: $photoId) {
      ok
      error
    }
  }
`;

const Comments = ({
  photoId,
  caption,
  comments,
  createdAt,
  user,
  commentNumber,
}: Props) => {
  const [areaHeight, setAreaHeight] = useState<number>(18);
  const keyDownHandler: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    event: any
  ) => {
    if (event.keyCode === 13) {
      if (event.shiftKey) {
        setAreaHeight(areaHeight + 18);
      } else {
        onValid(getValues());
        event.preventDefault();
      }
    } else if (event.keyCode === 8 && areaHeight > 18) {
      const countLine = event.target.value.split("\n").length;
      setAreaHeight(18 * countLine);
    }
  };

  const [createCommentMutation, { loading }] = useMutation(
    CREATE_COMMENT_MUTATION
  );
  const onValid = (data: any) => {
    console.log(data);
    const { payload } = data;
    if (loading) {
      return;
    }

    createCommentMutation({ variables: { photoId, payload } });
    setValue("payload");
  };

  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();
  return (
    <>
      <FooterComments>
        <Comment author={user.username} payload={caption} />
        {comments?.map((comment: any) => (
          <Comment
            key={comment.id}
            author={comment.user.username}
            payload={comment.payload}
          />
        ))}

        <CreatedAt>{createdAt}</CreatedAt>
      </FooterComments>
      <WriteComment>
        <FontAwesomeIcon size="2x" icon={faSmile} />
        <form onSubmit={handleSubmit(onValid)}>
          <CommentArea
            {...register("payload", { required: true })}
            style={{ height: `${areaHeight}` }}
            onKeyDown={keyDownHandler}
            autoComplete="off"
            autoCorrect="off"
            areaHeight={areaHeight + "px"}
            cols={78}
          />
          <input {...register("submit")} type="submit" value={"게시"} />
        </form>
      </WriteComment>
    </>
  );
};

export default Comments;
