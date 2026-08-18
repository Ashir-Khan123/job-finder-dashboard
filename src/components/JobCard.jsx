import { FiBookmark } from "react-icons/fi";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoBriefcaseOutline, IoLocationOutline } from "react-icons/io5";
import AppButton from "./Button.jsx";

function JobCard({ job }) {
  return (
    <div className="flex flex-col gap-4 lg:gap-5 shadow-xl p-3 md:p-3 xl:p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{job.title}</h3>
        <button className="bg-gray-200 p-2 cursor-pointer rounded-sm">
          <FiBookmark/>
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
      
      <div className="bg-cyan-500 text-gray-50 rounded-sm text-center">
        <AppButton to={`/job-details/${job.id}`}>view detail</AppButton>
      </div>
    </div>
  );
}

export default JobCard;
