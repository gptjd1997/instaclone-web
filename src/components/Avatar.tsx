import styled from "styled-components";

type Props = {
  size: string;
};

const SAvatar = styled.div<Props>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: ${(props) => props.size};
  background-color: #2c2c2c;
`;

const Img = styled.img<Props>`
  max-width: ${(props) => props.size};
  max-height: ${(props) => props.size};
  border-radius: ${(props) => props.size};
`;

const Avatar = ({ url, size }: any) => {
  return url !== "" && url !== null ? (
    <Img size={size} src={url} />
  ) : (
    <SAvatar size={size} />
  );
};

export default Avatar;
