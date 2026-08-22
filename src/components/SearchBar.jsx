import { GoSearch } from "react-icons/go";
import AppButton from "./Button";
import AppDropDown from "./Dropdown";
import { useState } from "react";
import { message } from "antd";

function SearchBar({ showJobType, onJobTypeChange, onJobLocationChange }) {
  const [searchValue, setSearchValue] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <div
        className={`w-full max-w-2xl mx-auto bg-transparent md:p-2 md:rounded-lg
      ${showJobType ? "" : " md:shadow-md md:shadow-gray-400"}
    `}
      >
        <div
          className={`flex justify-center flex-col md:w-full px-3 md:flex-row ${
            showJobType ? "gap-5 md:gap-3" : "md:px-2 md:gap-1 gap-4"
          }`}
        >
          <div
            className={`flex items-center font-semibold rounded-sm gap-2 ${
              showJobType
                ? "border-2 border-gray-400 shadow-sm focus-within:border-gray-800 focus-within:shadow-md"
                : "border-2 border-gray-400 md:border-none focus-within:border-gray-600 flex-1"
            }`}
          >
            <GoSearch className="ml-5 md:ml-2 text-lg md:text-xl" />
            <input
              type="text"
              placeholder={
                showJobType
                ? "Enter Job title"
                : "Enter Job title or keyword"
              }
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="py-3 w-full border-none outline-none text-sm placeholder:text-gray-400 "
            />
          </div>
          {showJobType && (
            <div className="flex items-center rounded-sm text-sm border-2 shadow-md border-gray-400 font-medium cursor-pointer focus-within:border-gray-800 focus-within:shadow-md">
              <AppDropDown type="jobType" onSelection={onJobTypeChange} />
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
          {showJobType && (
            <div className="flex items-center rounded-sm text-sm border-2 shadow-md border-gray-400 font-medium cursor-pointer">
              <AppDropDown type="location" onSelection={onJobLocationChange} />
            </div>
          )}
          <div className="bg-cyan-500 text-gray-100 py-2 px-2 rounded-sm text-center cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-cyan-600 hover:shadow-lg active:translate-y-0">
            <GoSearch />
            <AppButton
              to={`/jobs?search=${searchValue}`}
              onClick={(e) => {
                if (!searchValue.trim()) {
                  e.preventDefault();
                  messageApi.error("Please enter an input field");
                  return;
                }
                
                if (/\d/.test(searchValue)){
                  e.preventDefault();
                  messageApi.error("Please enter a valid field");
                  return;
                }

                setSearchValue("");
              }}
            >
              Search Job
            </AppButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
