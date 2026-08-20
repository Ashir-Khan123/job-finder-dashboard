import { FaArrowLeft } from "react-icons/fa6";
import AppNavbar from "../components/Navbar.jsx"
import { jobs } from "../data/jobs.js";
import AppButton from "../components/Button.jsx";
import { FiBookmark } from "react-icons/fi";
import { GrSend } from "react-icons/gr";
import AppAccordion from "../components/Accordion.jsx";
import AppFooter from "../components/Footer.jsx";

function SavedJobsPage(){
    
    const job = jobs.find((job) => job)
    
    return(
        <>
           <AppNavbar />
      <main>
        <section className="mt-6 py-12 px-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between py-3">
            <div className="flex items-center">
              <FaArrowLeft />
              <AppButton>Back to jobs</AppButton>
            </div>
            <div>
              <div className="flex justify-center  items-center gap-3 ">
                <div className="flex items-center py-1.5 px-2 bg-gray-200 rounded-sm">
                  <FiBookmark />
                  <AppButton>Save</AppButton>
                </div>
                <div className="flex items-center py-1.5 px-2 bg-cyan-600 text-white rounded-sm">
                  <GrSend />
                  <AppButton>Apply Now</AppButton>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-sm p-7 shadow-md border-2 border-gray-100">
            <div className="flex flex-col md:flex-row justify-between">
              <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
              <h5 className="flex items-center text-xs rounded-xl font-semibold text-cyan-700 bg-cyan-100 w-fit p-1 px-4">
                {job.jobType}
              </h5>
            </div>
            <p className="text-md font-semibold text-gray-600">{job.company}</p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-5 text-xs font-semibold text-gray-600">
              <p>{job.location}</p>
              <p>{job.salary}</p>
              <p>Posted 3 days ago</p>
            </div>
            <div className="flex gap-2 md:gap-5 items-center ">
              {job.skills.map((skill) => (
                <p className="flex md:gap-4 text-xs font-semibold text-cyan-800 bg-cyan-100 w-fit p-1 px-3 rounded-xl">
                  {skill}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row py-5 gap-5 ">
            <div className="rounded-lg shadow-lg w-full md:max-w-[70%] border-2 border-gray-100">
              <div className="font-bold">
                <AppAccordion job={job} />
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-lg w-full md:w-[30%]">
              <div className="md:p-6 rounded-sm shadow-xl">
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

              <div className="md:p-6 shadow-xl rounded-sm">
                <h5 className="font-bold">Skills</h5>
                <div className="flex gap-2 md:gap-5 items-center pt-3 flex-wrap">
                  {job.skills.map((skill) => (
                    <p className="flex md:gap-4 text-xs font-semibold text-cyan-800 bg-cyan-100 w-fit p-1 px-3 rounded-xl">
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
    )
}

export default SavedJobsPage