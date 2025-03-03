import type { Category } from "../../types/blogTypes";

interface CategoryHeaderProps {
  category: Category;
  count: number;
}

const CategoryHeader = ({ category, count }: CategoryHeaderProps) => {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
          {category.name}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of {count} articles about {category.name.toLowerCase()} in the automotive world.
        </p>
      </div>
    </div>
  );
};

export default CategoryHeader;
