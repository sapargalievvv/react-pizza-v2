import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (id: number) => void;
};
const categories = ['Все', 'Мясные', 'Вегетрианская', 'Гриль', 'Острые', 'С цыпленком'];

const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;

// {/*  */}
