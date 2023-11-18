import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  return (
    <Container>
      <div className="py-3  flex justify-between overflow-x-auto gap-3">
        {categories.map((item) => (
          <CategoryCard
            key={item.label}
            icon={item.icon}
            label={item.label}
            selected={category}
          ></CategoryCard>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
