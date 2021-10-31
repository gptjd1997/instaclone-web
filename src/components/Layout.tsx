import Header from "./Header";
import styled from "styled-components";

const Content = styled.main`
  margin-top: 45px;
  max-width: ${(props) => props.theme.wrapperWidth};
  width: 100%;
  margin: 0 auto;
`;

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
