import * as Popover from "@radix-ui/react-popover";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import type { IProductRowProps } from "../../../types/types";

const ProductRow = ({
  brand = "unknown brand",
  price,
  category,
  title,
  onDelete,
  id,
  row,
}: IProductRowProps) => {
  const [open, setOpen] = useState(false);

  return (
    <tr className="bg-white border-b border-gray-200 odd:bg-white even:bg-[#E8E8E8]">
      <td className="px-6 py-4 text-center">
        <Popover.Root open={open} onOpenChange={setOpen}>
          <Popover.Trigger asChild>
            <button className="w-[38px] h-[34px] flex items-center justify-center gap-[10px] rounded-[4px] bg-[#FF40404D]">
              <FaRegTrashAlt className="text-[#FF4040] text-lg" />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              side="right"
              align="start"
              className="bg-white shadow-lg rounded-lg p-4 w-64 z-50 border-t-4 border-[#FF4040] flex flex-col items-center"
            >
              <h4 className="font-extrabold text-[#54555D]">Are you sure ? </h4>
              <p className="text-sm mb-3 text-[#54555D]">
                Confirm to delete Row {row}
              </p>
              <div className="flex justify-end gap-2">
                <button
                  className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 text-sm cursor-pointer"
                  onClick={() => {
                    onDelete(id);
                    setOpen(false);
                  }}
                >
                  Yes
                </button>
                <button
                  className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  No
                </button>
              </div>
              <Popover.Arrow className="fill-white" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </td>
      <td className="px-6 py-4 text-center">{brand}</td>
      <td className="px-6 py-4 text-center">{price}</td>
      <td className="px-6 py-4 text-center">{category}</td>
      <td className="px-6 py-4 text-center">{title}</td>
      <td className="px-6 py-4 text-center">{row}</td>
    </tr>
  );
};

export default ProductRow;
