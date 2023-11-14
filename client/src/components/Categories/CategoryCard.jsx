const CategoryCard = ({ label, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 text-neutral-500 hover:text-neutral-800 transition-none cursor-pointer">
      <Icon size={26} />
      <h3 className="text-sm font-medium">{label}</h3>
    </div>
  );
};

export default CategoryCard;
