import { useSearchParams } from "react-router-dom";
import AppFooter from "../components/Footer.jsx";
import JobCard from "../components/JobCard.jsx";
import AppNavbar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { jobs } from "../data/jobs.js";
import { useState } from "react";

function JobsPage() {
  const [searchParams] = useSearchParams();
  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedJobLocation, setSelectedJobLocation] = useState("");

  const SearchValue = searchParams.get("search") || "";
  const LocationValue = searchParams.get("location") || "";

  const filteredJobs = jobs.filter((job) => {
    const searchJob = job.title
      .toLowerCase()
      .includes(SearchValue.toLowerCase());

    const matchType = job.jobType
      .toLowerCase()
      .includes(selectedJobType.toLowerCase());

    const matchLocation = job.location
      .toLowerCase()
      .includes(LocationValue.toLowerCase());

    return searchJob && matchType && matchLocation ;
  });

  const displayedJobs =
    SearchValue || selectedJobType || LocationValue ? filteredJobs : jobs.slice(0, 9);

  return (
    <div>
      <AppNavbar />

      <main>
        <section className="mt-8 md:mt-14 py-8">
          <div className="flex items-center md:justify-center">
            <div className="p-4">
              <h2 className="text-4xl font-bold text-gray-700">Find Your Next Opportunity</h2>
              <p className="font-semibold text-sm py-6 text-gray-500">
                Search for jobs by title, type, or location to find the right opportunity for you 
              </p>
            </div>
          </div>
          <SearchBar showJobType={true} onJobTypeChange={setSelectedJobType} />
        </section>

        <section className="px-5 py-1 bg-gray-50">
          {displayedJobs.length > 0 ? (
            <p className="text-xl lg:text-2xl text-gray-700 font-bold py-6">Jobs For You</p>
          ) : (
            <p className="hidden"></p>
          )}

          {displayedJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 pb-15">
              {displayedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-gray-800">
                No Jobs Found
              </h2>

              <p className="text-gray-500 mt-2">
                Sorry, we couldn't find any jobs matching your search.
              </p>
            </div>
          )}
        </section>
      </main>

      <AppFooter />
    </div>
  );
}

export default JobsPage;
