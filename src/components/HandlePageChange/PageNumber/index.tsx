import type { IPageNumberDropDownProps } from "../../../types";

const PageNumberDropDown = ({
  totalPages,
  pageNumber,
  setPageNumber,
}: IPageNumberDropDownProps) => {
  return (
    <div className="flex items-center gap-2 text-sm mt-4 text-right" dir="rtl">
      <label
        htmlFor="page-select"
        className="font-normal text-base leading-7 text-[#54555D] "
      >
        برو به صفحه :
      </label>

      <select
        id="page-select"
        value={pageNumber}
        dir="rtl"
        onChange={(e) => setPageNumber(Number(e.target.value))}
        className="w-16 h-10 border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 text-right"
      >
        {[...Array(totalPages)].map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PageNumberDropDown;
