function CategoryNav({ selectedCategory, onSelectCategory }) {
  const categories = ["All", "HTML", "CSS", "JavaScript", "React"];

  return (
    <nav className="flex gap-2 border-b p-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={
            category === selectedCategory
              ? "rounded-full bg-indigo-600 px-4 py-1 text-white"
              : "rounded-full bg-slate-100 px-4 py-1"
          }
        >
          {category}
        </button>
      ))}
    </nav>
  );
}

export default CategoryNav;