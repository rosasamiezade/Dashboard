import type { IPageNumberDropDownProps } from "../../../types/types";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Pagination = ({
  totalPages,
  pageNumber,
  setPageNumber,
}: IPageNumberDropDownProps) => {
  const nextPage = () => {
    setPageNumber((prev: number) => prev + 1);
  };

  const prevPage = () => {
    setPageNumber((prev: number) => prev - 1);
  };

  return (
    <div className="flex items-center gap-2 justify-center mt-4" dir="rtl">
      <button
        onClick={prevPage}
        disabled={pageNumber === 1}
        className="w-12 h-12  rounded bg-[#F7F7F8] hover:bg-gray-300 text-[#6D6D74] disabled:bg-gray-100 cursor-pointer flex items-center justify-center"
      >
        <GrNext />
      </button>

      <button className="w-12 h-12 rounded bg-[#3C3D45] text-white font-semibold cursor-pointer flex items-center justify-center">
        {pageNumber}
      </button>

      {pageNumber + 1 <= totalPages && (
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          className="w-12 h-12  px-3 py-1 rounded bg-[#F7F7F8] text-[#6D6D74] hover:bg-gray-300 cursor-pointer flex items-center justify-center"
        >
          {pageNumber + 1}
        </button>
      )}

      {pageNumber + 2 <= totalPages && (
        <button
          onClick={() => setPageNumber(pageNumber + 2)}
          className="w-12 h-12 rounded bg-[#F7F7F8] text-[#6D6D74] hover:bg-gray-300 cursor-pointer flex items-center justify-center"
        >
          {pageNumber + 2}
        </button>
      )}

      {pageNumber + 3 < totalPages && (
        <>
          <span className="px-2">...</span>
          <button
            onClick={() => setPageNumber(totalPages)}
            className="w-12 h-12 rounded bg-[#F7F7F8] text-[#6D6D74] hover:bg-gray-300 cursor-pointer flex items-center justify-center"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={nextPage}
        disabled={pageNumber === totalPages}
        className="w-12 h-12 rounded bg-[#F7F7F8] hover:bg-gray-300 disabled:bg-gray-100 cursor-pointer flex items-center justify-center text-[#6D6D74]"
      >
        <GrPrevious />
      </button>
    </div>
  );
};

export default Pagination;
