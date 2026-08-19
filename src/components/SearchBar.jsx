import { GoSearch } from "react-icons/go";
import AppButton from "./Button";
import { CiLocationOn } from "react-icons/ci";
import AppDropDown from "./Dropdown";
import { IoBriefcaseOutline } from "react-icons/io5";
import { useState } from "react";

function SearchBar({ showJobType , onSearch }) {
  const [searchValue , setSearchValue] = useState("")
  return (
    <div className="mx-auto md:w-2xl lg:w-3xl bg-transparent md:shadow-md md:shadow-gray-400 md:p-2 md:rounded-lg">
      <div className={`flex justify-center flex-col md:w-full px-3 md:flex-row ${
        showJobType ? "gap-3" : "md:px-2 md:gap-1 gap-4"
      }`}>
        <div className={`flex items-center font-semibold rounded-sm gap-2 border-2 border-gray-200 ${
          showJobType ? "border-2" : "md:border-none md:flex-1"
        }`}>
          <GoSearch className="ml-5 md:ml-2 text-lg md:text-xl" />
          <input
            type="text"
            placeholder={`${
              showJobType ? "Enter your Job title" : "Job title , keyword or company"
            }`}
            onChange={(e) => setSearchValue(e.target.value)}
            className="py-3 w-full border-none outline-none text-sm"
          />
        </div>
        {showJobType && (
         <div className="flex items-center border-2 border-gray-200 rounded-sm text-sm font-medium cursor-pointer">
          <AppDropDown/>
         </div>
        )}
        <span className={`${
            showJobType ? "hidden" : "hidden md:flex md:items-center md:text-gray-300 md:text-xl"
          }`}>
          |
        </span>
        <div className={`flex items-center font-semibold rounded-sm gap-2 border-2 border-gray-200 ${
          showJobType ? "border-2" : "md:border-none"
        }`}>
          <CiLocationOn className="ml-5 text-lg md:text-xl" />
          <input
            type="text"
            placeholder="Location"
            className="py-3 w-full border-none outline-none text-sm"
          />
        </div>
        <div className="bg-cyan-600 text-gray-100 py-1 md:py-2 rounded-sm text-center cursor-pointer md:flex md:items-center" onClick={() => onSearch(searchValue)}>
          <GoSearch />
          <AppButton to="/jobs" className="bg-green-300">Search Job</AppButton>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
