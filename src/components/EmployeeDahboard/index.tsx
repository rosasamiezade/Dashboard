import { FaRegEnvelope } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";

const EmployeeDashboard = () => {
  return (
    <div dir="rtl" className="flex justify-between w-full my-10">
      <div className="flex">
        <h2 className="font-bold text-[#1E1E6E] text-lg ml-3">داشبورد کاربر</h2>
        <p className="bg-[#E0EEFF] text-[#1E1E6E] w-20 h-8 text-sm rounded-sm flex items-center justify-center px-1.5 py-3">
          کارمند
        </p>
      </div>
      <div className="flex">
        <button className="w-[42px] h-[38px] gap-2 rounded-sm p-2 [background-color:rgba(255,123,45,0.3)] text-[#FF7B2D] flex items-center justify-center text-2xl cursor-pointer">
          <IoIosNotifications />
        </button>
        <button className="w-[42px] h-[38px] gap-2 rounded-[6px] border border-[#FF7B2D] text-[#FF7B2D] p-2 flex items-center justify-center mr-3 text-xl cursor-pointer">
          <FaRegEnvelope />
        </button>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
