import type { ITableBodyProps } from "../../../types";
import type { IProductRowProps } from "../../../types";

import ProductRow from "../ProductRow";
const TableBody = ({ products, onDelete }: ITableBodyProps) => (
  <tbody>
    {products?.map((product: IProductRowProps, index: number) => (
      <ProductRow
        {...product}
        key={product.id}
        onDelete={onDelete}
        row={index + 1}
      />
    ))}
  </tbody>
);

export default TableBody;
