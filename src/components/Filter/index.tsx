import { useState } from "react";
import { useCategories } from "../../hooks/useCategories";
import type { IFilterProps } from "../../types/types";
const Filter = ({ selectedCategory, setSelectedCategory }: IFilterProps) => {
  const [categoryState, setCategoryState] = useState(selectedCategory);
  const { data: allCategories, isLoading, isError } = useCategories();

  if (isLoading) {
    return <div>loading ...</div>;
  }
  if (isError) {
    return <div>error</div>;
  }

  return (
    <div className="flex w-full h-[62px] items-center mx-auto my-10 justify-between">
      <div className="flex items-center justify-between w-2/5">
        <button
          onClick={() => {
            setSelectedCategory("");
            setCategoryState("");
          }}
          className="w-[82px] h-[48px] px-6 py-2 rounded-sm border border-[#FF4040] bg-[#FF4040] text-white cursor-pointer"
        >
          حذف
        </button>
        <button
          onClick={() => setSelectedCategory(categoryState)}
          className="w-[252px] h-[48px] px-6 py-2 rounded-sm bg-[#FF7B2D] text-white cursor-pointer"
        >
          اعمال فیلتر ها{" "}
        </button>
      </div>
      <div className="h-16 w-56 gap-3 relative">
        <select
          dir="rtl"
          onChange={(e) => setCategoryState(e.target.value)}
          value={categoryState}
          name="categories"
          id="categories"
          className="w-full h-full border border-gray-300 rounded px-3 py-2 text-gray-800
      focus:outline-none focus:ring-2 focus:ring-blue-500 "
        >
          <option value="">All</option>
          {allCategories?.map((category: string) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
        <label className="text-gray-600 text-sm absolute -top-2 right-5 bg-white px-1">
          Category
        </label>
      </div>
    </div>
  );
};

export default Filter;
