import { GrSend } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import AppApplyMessage from "./Message.jsx";

function JobCardTwo({ job, deleteBtn }) {
  return (
    <>
      <div className="flex flex-col gap-4 md:gap-6 rounded-sm p-5 md:p-8 shadow-md border-2 border-gray-100">
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 order-2 md:order-1">
            {job.title}
          </h2>

          {!deleteBtn && (
            <h5 className="flex items-center cursor-pointer text-[10px] order-1 md:order-2 rounded-xl font-bold text-cyan-700 bg-cyan-100 w-fit p-1 px-4">
              {job.jobType}
            </h5>
          )}
        </div>
        <p className="text-md font-bold text-gray-600">{job.company}</p>{" "}
        <div className="flex flex-col md:flex-row gap-3 md:gap-5 text-xs font-semibold text-gray-600">
          <p>{job.location}</p>
          <p>{job.salary}</p>
          <p>Posted 3 days ago</p>
        </div>
        <div className="flex gap-3 md:gap-5 items-center flex-wrap">
          {job.skills.map((skill) => (
            <p className="flex md:gap-4 text-[10px] font-semibold text-cyan-800 bg-cyan-100 w-fit p-1 px-3 rounded-xl">
              {skill}
            </p>
          ))}
        </div>
        <div>
          {deleteBtn && (
            <div className="flex justify-center gap-3">
              <button
                onClick={() => deleteBtn(job.id)}
                className="text-sm flex items-center gap-2 w-fit cursor-pointer font-semibold bg-red-500 text-gray-50 hover:bg-red-700 px-3 py-1.5 rounded-sm"
              >
                <RiDeleteBinLine className="text-lg"/>
                Remove
              </button>

              <div className="flex items-center gap-2 w-fit py-1.5 font-semibold px-2 cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-sm text-white rounded-sm">
                <GrSend />
                <AppApplyMessage />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default JobCardTwo;
