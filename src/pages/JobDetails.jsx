import { useParams } from "react-router-dom";
import AppNavbar from "../components/Navbar.jsx";
import { FaArrowLeft } from "react-icons/fa6";
import { FiBookmark } from "react-icons/fi";
import AppButton from "../components/Button.jsx";
import { GrSend } from "react-icons/gr";
import AppAccordion from "../components/Accordion.jsx";
import AppFooter from "../components/Footer.jsx";
import { jobs } from "../data/jobs.js";
import JobCardTwo from "../components/JobCardTwo.jsx";
import { isJobSaved, saveJob, removeSavedJob } from "../utils/savedJobs.js";
import { useState } from "react";
import AppApplyMessage from "../components/Message.jsx";

function JobDetailsPage() {
  const { id } = useParams();
  const jobId = Number(id);

  const [saved, setSaved] = useState(isJobSaved(jobId));

  const job = jobs.find((job) => job.id === Number(id));

  return (
    <>
      <AppNavbar />
      <main>
        <section className="mt-6 py-12 px-5">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between py-3">
            <div className="flex items-center">
              <FaArrowLeft />
              <AppButton to={'/jobs'} >Back to jobs</AppButton>
            </div>
            <div>
              <div className="flex justify-center items-center gap-3 ">
                <div className="flex items-center py-1.5 px-3 border-2 hover:shadow-xl shadow-sm text-gray-600 border-gray-300 rounded-sm">
                  <FiBookmark />
                  <button
                    onClick={() => {
                      if (saved) {
                        removeSavedJob(jobId);
                        setSaved(false);
                      } else {
                        saveJob(jobId);
                        setSaved(true);
                      }
                    }}
                    className="px-2 font-semibold text-sm  cursor-pointer"
                  >
                    {saved ? "Saved" : "Save Job"}
                  </button>
                </div>
                <div className="flex items-center gap-2 text-sm py-2 px-2 cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-white rounded-sm">
                  <GrSend />
                  <AppApplyMessage />
                </div>
              </div>
            </div>
          </div>

          <JobCardTwo job={job} />

          <div className="flex flex-col md:flex-row py-5 gap-5 ">
            <div className="rounded-lg shadow-lg w-full md:max-w-[70%] border-2 border-gray-100">
              <div className="font-bold">
                <AppAccordion job={job} />
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-lg w-full md:w-[30%]">
              <div className="p-6 rounded-sm shadow-xl border-2 border-gray-200">
                <h5 className="font-bold">Job Details</h5>
                <div className="pt-4 flex flex-col gap-4">
                  <div className="flex gap-3 justify-between text-sm font-semibold text-gray-600">
                    <h5>Job Type</h5>
                    <p className="text-xs">{job.jobType}</p>
                  </div>
                  <div className="flex gap-3 justify-between text-sm font-semibold text-gray-600">
                    <h5>Experience</h5>
                    <p className="text-xs">Fresh / Student</p>
                  </div>
                  <div className="flex gap-3 justify-between text-sm font-semibold text-gray-600">
                    <h5>Salary</h5>
                    <p className="text-xs">{job.salary}</p>
                  </div>
                  <div className="flex gap-3 justify-between text-sm font-semibold text-gray-600">
                    <h5>Location</h5>
                    <p className="text-xs">{job.location}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 shadow-xl rounded-sm border-2 border-gray-200">
                <h5 className="font-bold">Skills</h5>
                <div className="flex gap-3 md:gap-5 items-center pt-3 flex-wrap">
                  {job.skills.map((skill) => (
                    <p className="flex md:gap-4 text-[10px] font-semibold text-cyan-800 bg-cyan-100 w-fit p-1 px-2 md:px-3 rounded-xl" key={skill}>
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </>
  );
}


export default JobDetailsPage;
