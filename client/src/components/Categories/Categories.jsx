import Container from "../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <Container>
      <div className="py-3  flex justify-between overflow-x-auto gap-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.label}
            icon={category.icon}
            label={category.label}
          ></CategoryCard>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
