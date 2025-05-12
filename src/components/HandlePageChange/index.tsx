import type { IHandlePageChangeProps } from "../../types/types";
import PageNumberDropDown from "./PageNumber";
import Pagination from "./Pagination";
import { useMemo } from "react";
const HandlePageChange = ({
  totalItems,
  limit,
  pageNumber,
  setPageNumber,
}: IHandlePageChangeProps) => {
  const totalPages = useMemo(
    () => Math.ceil(totalItems / limit),
    [totalItems, limit]
  );

  return (
    <div className="flex justify-between items-center my-16">
      <Pagination
        totalPages={totalPages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <PageNumberDropDown
        totalPages={totalPages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default HandlePageChange;
