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

  const SearchValue = searchParams.get("search") || "";

  const filteredJobs = jobs.filter((job) => {
    const searchJob = job.title
      .toLowerCase()
      .includes(SearchValue.toLowerCase());

    const matchType = job.jobType
      .toLowerCase()
      .includes(selectedJobType.toLowerCase());

    return searchJob && matchType;
  });

  const displayedJobs =
    SearchValue || selectedJobType
      ? filteredJobs
      : jobs.slice(0, 9);

  return (
    <div>
      <AppNavbar />

      <main>
        <section className="mt-24 py-12">
          <SearchBar
            showJobType={true}
            onJobTypeChange={setSelectedJobType}
          />
        </section>

        <section className="px-5 py-11">
          {displayedJobs.length > 0 
          ?
            <p className="text-xl text-gray-700 font-bold py-6">
            Jobs For You
          </p>
          :
          <p className="hidden"></p>
          }

          {displayedJobs.length > 0 
          ? 
          (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8">
              {displayedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) 
          : 
          (
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
