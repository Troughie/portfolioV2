import Divider from "./Divider";
interface props {
  name: string;
}
const BreadCrumb = ({ name }: props) => {
  return (
    <>
      <h1 className="text-4xl">{name}</h1>
      <Divider />
    </>
  );
};

export default BreadCrumb;
