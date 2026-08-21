import { FiBookmark } from "react-icons/fi";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoBriefcaseOutline, IoLocationOutline } from "react-icons/io5";
import AppButton from "./Button.jsx";
import {
  isJobSaved,
  saveJob,
  removeSavedJob,
} from "../utils/savedJobs.js";
import { useState } from "react";

function JobCard({ job }) {
  const [saved, setSaved] = useState(isJobSaved(job.id))
  return (
    <div className="flex flex-col gap-4 lg:gap-5 shadow-xl p-3 md:p-5 xl:p-6 rounded-sm border-2 border-cyan-600 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between">
        <h3 className="text-md md:text-lg font-semibold text-gray-700">{job.title}</h3>
        <button
  onClick={() => {
    if (saved) {
      removeSavedJob(job.id);
      setSaved(false);
    } else {
      saveJob(job.id);
      setSaved(true);
    }
  }}
  className={`p-3 rounded-lg shadow-sm transition-all duration-300
    hover:scale-110 active:scale-95 cursor-pointer
    ${saved ? "bg-cyan-100 text-cyan-600" : "bg-gray-100 text-black "}
  `}
>
  <FiBookmark
    className={saved ? "fill-current" : ""}
  />
</button>
      </div>
      <p className="text-sm font-semibold text-cyan-600">{job.company}</p>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="">
          <div className="flex items-center gap-1.5">
            <div className="bg-green-100 text-green-900 p-2 rounded-md">
              <GiTakeMyMoney className="text-md" />
            </div>
            <div className="">
              <p className="text-[10px] font-semibold text-gray-600">Salary</p>
              <p className="text-xs font-semibold">{job.salary}</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-1.5">
            <div className="bg-green-100 text-green-800 p-2 rounded-md">
              <IoBriefcaseOutline className="text-md" />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-gray-600">
                Job Type
              </p>
              <p className="text-xs font-semibold">{job.jobType}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <div className="bg-cyan-100 text-green-800 p-2 rounded-md">
            <IoLocationOutline className="text-md" />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-gray-600">Location</p>
            <p className="text-xs font-semibold">{job.location}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-cyan-500 cursor-pointer text-gray-50 transition-all duration-300 ease-in-out hover:bg-cyan-600 hover:shadow-lg active:translate-y-0 py-1.5 rounded-sm text-center">
        <AppButton to={`/job-details/${job.id}`}>view detail</AppButton>
      </div>
    </div>
  );
}

export default JobCard;
