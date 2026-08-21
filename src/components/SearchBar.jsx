import { GoSearch } from "react-icons/go";
import AppButton from "./Button";
import { CiLocationOn } from "react-icons/ci";
import AppDropDown from "./Dropdown";
import { useState } from "react";

function SearchBar({ showJobType, onJobTypeChange, onJobLocationChange }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  return (
    <div
      className={`bg-transparent md:p-2 md:rounded-lg
      ${showJobType ? "" : " md:shadow-md md:shadow-gray-400"}
    `}
    >
      <div
        className={`flex justify-center flex-col md:w-full px-3 md:flex-row ${
          showJobType ? "gap-3" : "md:px-2 md:gap-1 gap-4"
        }`}
      >
        <div
          className={`flex items-center font-semibold rounded-sm gap-2 ${
            showJobType
              ? "border-2 shadow-md border-gray-400"
              : "border-2 border-gray-400 md:border-none"
          }`}
        >
          <GoSearch className="ml-5 md:ml-2 text-lg md:text-xl" />
          <input
            type="text"
            placeholder="Enter Job title"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="py-3 w-full border-none outline-none text-sm"
          />
        </div>
        {showJobType && (
          <div className="flex items-center rounded-sm text-sm border-2 shadow-md border-gray-400 font-medium cursor-pointer">
            <AppDropDown onSelection={onJobTypeChange} />
          </div>
        )}
        <span
          className={`${
            showJobType
              ? "hidden"
              : "hidden md:flex md:items-center md:text-gray-300 md:text-xl"
          }`}
        >
          |
        </span>
        <div
          className={`flex items-center font-semibold rounded-sm gap-2 ${
            showJobType
              ? "border-2 shadow-md border-gray-400"
              : "border-2 border-gray-400 md:border-none"
          }`}
        >
          <CiLocationOn className="ml-5 text-lg md:text-xl" />
          <input
            type="text"
            placeholder="Location"
            onChange={(e) => setSearchLocation(e.target.value)}
            className="py-3 w-full border-none outline-none text-sm"
          />
        </div>
        <div className="bg-cyan-500 text-gray-100 py-2 px-2 rounded-sm text-center cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-cyan-600 hover:shadow-lg active:translate-y-0">
          <GoSearch />
          <AppButton
            to={`/jobs?search=${encodeURIComponent(searchValue)}&location=${encodeURIComponent(searchLocation)}`}
          >
            Search Job
          </AppButton>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
