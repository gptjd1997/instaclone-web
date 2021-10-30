import styled from "styled-components";

const OR = styled.div`
  margin: 10px 0px 18px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  width: auto;
  div:nth-child(2) {
    font-size: 13px;
    font-weight: 800;
    color: ${(props) => props.theme.subFontColor};
    margin: 0px 18px;
  }
`;
const Stretches = styled.div`
  background-color: ${(props) => props.theme.borderColor};
  height: 1px;
  width: 103px;
  margin: 0px;
  position: relative;
  top: 6.3px;
`;

const Separator = () => {
  return (
    <OR>
      <Stretches />
      <div>또는</div>
      <Stretches />
    </OR>
  );
};

export default Separator;
