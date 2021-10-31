import { gql, useMutation } from "@apollo/client";

import { faComments, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faPaperPlane,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../Avatar";
import { BaseBox } from "../shared";
import Comments from "./Comments";

const PhotoFooter = styled.div`
  max-height: 260px;
`;
const FooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 8px 8px 8px;
`;
const FooterLikes = styled.div`
  font-weight: 600;
  height: 18px;
  margin-bottom: 8px;
  padding: 0px 16px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.fontColor};
`;

const HeartIcon = styled(FontAwesomeIcon)`
  color: ${(props: heartProps) =>
    props.isLiked ? "tomato" : props.theme.fontColor};
`;

const LeftIcons = styled.div`
  & > * {
    font-size: 40px;
    padding: 8px;
    cursor: pointer;
  }
`;

const PhotoContainer = styled(BaseBox)`
  flex-flow: column;
  justify-content: start;
  margin-bottom: 24px;
`;
const PhotoHeader = styled.div`
  display: flex;
  max-height: 60px;
  width: 614px;
  padding: 14px 16px;
  a {
    margin-left: 18px;
    align-self: center;
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.theme.fontColor};
  }
`;

const PhotoContents = styled.div`
  overflow: hidden;
  height: 614px;
  width: 614px;
  background-color: red;
`;

const PhotoImg = styled.img`
  height: 614px;
  width: 614px;
`;

type heartProps = {
  isLiked: boolean;
  theme: any;
};

type Props = {
  id: number;
  user: {
    avatar?: string;
    username: string;
  };
  createdAt: string;
  file: string;
  isLiked: boolean;
  likes: number;
  caption: string;
  commentNumber: number;
  comments: any;
};

const TOGGLE_LIKE_MUTATION = gql`
  mutation toggleLike($photoId: Int!) {
    toggleLike(photoId: $photoId) {
      ok
      error
      toggle
    }
  }
`;
const Photo = ({
  id,
  user,
  file,
  isLiked,
  likes,
  caption,
  createdAt,
  commentNumber,
  comments,
}: Props) => {
  const updateToggleLike = (cache: any, result: any) => {
    const {
      data: {
        toggleLike: { ok },
      },
    } = result;
    if (ok) {
      const photoId = `Photo:${id}`;
      cache.modify({
        id: photoId,
        fields: {
          isLiked(prev: boolean) {
            return !prev;
          },
          likes(prev: number) {
            return isLiked ? prev - 1 : prev + 1;
          },
        },
      });
    }
  };
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE_MUTATION, {
    variables: { photoId: id },
    update: updateToggleLike,
  });
  const commentProps = { caption, commentNumber, comments, createdAt, user };

  return (
    <PhotoContainer key={id}>
      <PhotoHeader>
        <Avatar size="32px" url={user.avatar} />
        <Link to="#">{user.username}</Link>
      </PhotoHeader>
      <PhotoContents>
        <PhotoImg src={file} />
      </PhotoContents>
      <PhotoFooter>
        <FooterHeader>
          <LeftIcons>
            <HeartIcon
              isLiked={isLiked}
              onClick={() => toggleLikeMutation()}
              icon={isLiked ? faHeartSolid : faHeart}
            />
            <FontAwesomeIcon icon={faComments} />
            <FontAwesomeIcon icon={faPaperPlane} />
          </LeftIcons>
          <div></div>
          <div></div>
        </FooterHeader>
        <FooterLikes>좋아요 {likes}개</FooterLikes>
        <Comments {...commentProps} />
      </PhotoFooter>
    </PhotoContainer>
  );
};

export default Photo;
