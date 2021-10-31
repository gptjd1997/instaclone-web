import styled from "styled-components";
import Comment from "./Comment";

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
  height: 53px;
  padding: 6px 16px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;
type Props = {
  caption: string;
  comments?: any;
  createdAt: string;
  commentNumber: number;
  user: {
    username: string;
    avatar?: string;
  };
};

const Comments = ({
  caption,
  comments,
  createdAt,
  user,
  commentNumber,
}: Props) => {
  console.log(comments);
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
      <WriteComment></WriteComment>
    </>
  );
};

export default Comments;
