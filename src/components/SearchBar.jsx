import { GoSearch } from "react-icons/go";
import AppButton from "./Button";
import { CiLocationOn } from "react-icons/ci";

function SearchBar() {
  return (
    <div className="md:w-2xl lg:w-3xl mx-auto bg-transparent md:shadow-md md:shadow-gray-400 md:p-2 md:rounded-lg">
      <div className="flex justify-center flex-col px-3 gap-4 md:flex-row md:w-full md:px-2 md:gap-1">
        <div className="flex items-center font-semibold rounded-sm gap-2 md:flex-1 border-2 border-gray-300 md:border-none">
          <GoSearch className="ml-5 md:ml-2 text-lg md:text-xl"/>
          <input
            type="text"
            placeholder="Job title , keyword or company"
            className="py-3 w-full border-none outline-none text-sm"
          />
        </div>
        <span className=" hidden md:flex md:items-center md:text-gray-300 md:text-xl">|</span>
        <div className="flex items-center font-semibold rounded-sm gap-2 border-2 border-gray-300 md:border-none">
          <CiLocationOn className="ml-5 text-lg md:text-xl"/>
          <input
            type="text"
            placeholder="Location"
            className="py-3 w-full border-none outline-none text-sm"
          />
        </div>
        <div className="bg-cyan-600 text-gray-100 py-1 md:py-0 rounded-lg text-center cursor-pointer md:flex md:items-center">
          <AppButton to="/jobs">Search Job</AppButton>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
