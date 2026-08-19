import { useParams, useSearchParams } from "react-router-dom";
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
    const searchJob = job.title.toLowerCase().includes(SearchValue.toLowerCase())
    const matchType = job.jobType.toLowerCase().includes(selectedJobType.toLowerCase())

    return searchJob && matchType
  }
  );

  return (
    <div>
      <AppNavbar />
      <main>
        <section className="mt-24 py-12">
          <SearchBar showJobType={true} onJobTypeChange={setSelectedJobType} />
        </section>
        <section className="px-5 py-11">
          <p className="text-xl text-gray-700 font-bold py-6">Jobs For You</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8">
            {(SearchValue || selectedJobType ? filteredJobs : jobs.slice(0, 9)).map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  );
}

export default JobsPage;
