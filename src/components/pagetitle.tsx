import { Helmet } from "react-helmet-async";
type props = {
  title: string | null;
};
const Pagetitle = ({ title }: props) => {
  return (
    <Helmet>
      <title>{title} 👳‍♂️ Chimstagram</title>
    </Helmet>
  );
};

export default Pagetitle;
