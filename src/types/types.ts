export interface IProductRowProps {
  brand?: string;
  price: number;
  category: string;
  title: string;
  id: number;
  onDelete: (id: number) => void;
  row: number;
}

export type ProductsQueryParams = {
  limit: number;
  skip: number;
  category?: string;
};

export interface IFilterProps {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

export interface IHandlePageChangeProps {
  totalItems: number;
  limit: number;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

export interface IPageNumberDropDownProps {
  totalPages: number;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

export interface ITableBodyProps {
  products: [];
  onDelete: (id: number) => void;
}
