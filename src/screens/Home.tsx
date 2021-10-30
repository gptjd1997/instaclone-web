import styled from "styled-components";
import { darkModeVar, isLoggedInVar, logUserOut } from "../apollo";

const Title = styled.h1``;

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Title>Home</Title>
      <h1>Welcome!</h1>
      <button
        onClick={() => {
          logUserOut();
        }}
      >
        Log out now!
      </button>
    </Container>
  );
};

export default Home;
