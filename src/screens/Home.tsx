import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Photo from "../components/feed/Photo";
import Pagetitle from "../components/pagetitle";

const FEED_QUERY = gql`
  query seeFeed($lastId: Int!, $page: Int!, $take: Int!) {
    seeFeed(lastId: $lastId) {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      commentNumber
      comments(page: $page, take: $take) {
        id
        user {
          id
          username
        }
        payload
      }
      createdAt
      isMine
      isLiked
    }
  }
`;
const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

const Home = () => {
  const { data } = useQuery(FEED_QUERY, {
    variables: { lastId: 0, page: 1, take: 2 },
  });
  console.log("data", data);
  return (
    <HomeContainer>
      <Pagetitle title="Home" />
      <div>
        {data?.seeFeed?.map((photo: any) => (
          <Photo key={photo.id} {...photo} />
        ))}
      </div>
    </HomeContainer>
  );
};

export default Home;
