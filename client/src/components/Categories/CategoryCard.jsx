import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";
const CategoryCard = ({ label, icon: Icon, selected }) => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  params.get("category");
  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString);
      const updatedQuery = { ...currentQuery, category: label };
      const url = qs.stringifyUrl({
        url: "/",
        query: updatedQuery,
      });
      navigate(url);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col text-neutral-500 hover:text-neutral-800 transition-none cursor-pointer items-center justify-center gap-2 p-3 border-b-2  ${
        selected === label ? "border-b-neutral-800 text-neutral-800" : ""
      } `}
    >
      <Icon size={26} />
      <h3 className="text-sm font-medium">{label}</h3>
    </div>
  );
};

export default CategoryCard;
