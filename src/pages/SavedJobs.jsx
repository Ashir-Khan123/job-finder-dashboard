import { FaArrowLeft } from "react-icons/fa6";
import AppNavbar from "../components/Navbar.jsx";
import { jobs } from "../data/jobs.js";
import AppButton from "../components/Button.jsx";
import { FiBookmark } from "react-icons/fi";
import { GrSend } from "react-icons/gr";
import AppFooter from "../components/Footer.jsx";
import JobCardTwo from "../components/JobCardTwo.jsx";
import { useState } from "react";
import { getSavedJobIds, removeSavedJob } from "../utils/savedJobs.js";

function SavedJobsPage() {
  const [savedJobs, setSavedJobs] = useState(() => {
    const savedIds = getSavedJobIds();

    return jobs.filter((job) => savedIds.includes(job.id));
  });
  const job = jobs.find((job) => job);

  const handleRemove = (jobId) => {
    removeSavedJob(jobId);
    setSavedJobs((prev) => prev.filter((job) => job.id !== jobId));
  };
  return (
    <>
      <AppNavbar />
      <main>
        <section className="mt-10 py-15 md:px-10 px-5">
          <div className="flex justify-between items-center">
            <div className="py-3">
              <h2 className="md:text-4xl text-2xl font-semibold ">Saved Jobs</h2>
              <p className="font-medium pt-2 text-gray-600">
                Jobs you've saved for later
              </p>
            </div>
            <FiBookmark className="text-6xl text-gray-600 rounded-lg" />
          </div>
          <div className="flex flex-col md:flex-row py-5 gap-5">
            <div className="w-full">
              {savedJobs.length === 0 ? (
                <div className="text-center py-20 shadow-sm rounded-lg">
                  <FiBookmark className="mx-auto text-4xl text-gray-400" />

                  <h2 className="text-xl font-bold mt-4">No saved jobs yet</h2>

                  <p className="text-gray-500 mt-2">
                    Save jobs you're interested in and find them here.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {savedJobs.map((job) => (
                    <JobCardTwo
                      key={job.id}
                      job={job}
                      deleteBtn={handleRemove}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </>
  );
}

export default SavedJobsPage;
