import { LuShieldCheck, LuZap } from "react-icons/lu";
import JobCard from "../components/JobCard.jsx";
import AppNavbar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { jobs } from "../data/jobs.js";
import AppFooter from "../components/Footer.jsx";
import AppButton from "../components/Button.jsx";
import { FaArrowRight } from "react-icons/fa6";
import { FiBookmark } from "react-icons/fi";

function HomePage() {
  return (
    <>
      <AppNavbar />
      <main>
        <section className="mt-24 md:my-28" >
          <div className="flex flex-col md:items-center gap-5 md:gap-6 px-2 ">
            <h3 className="text-center text-4xl md:text-5xl text-gray-800 font-semibold md:max-w-lg md:leading-14">
              Find the right job that fits{" "}
              <span className="text-cyan-600">your future</span>
            </h3>
            <p className="text-center text-md md:text-lg md:max-w-lg md:leading-8">
              Explore thousand of opportunities from top companies and take the
              next step in your career
            </p>
            <div className="md:pt-6 pt-2">
              <SearchBar />
            </div>
          </div>
        </section>

        <section className="pt-16 px-6 lg:p-12 bg-gray-50">
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-bold">Featured Jobs</h2>
              <div className="bg-transparent hover:text-cyan-600 md:bg-cyan-500 transition-all duration-300 ease-in-out hover:md:bg-cyan-600 text-xs hover:md:shadow-lg active:translate-y-0 text-cyan-500 font-semibold md:text-gray-100 py-1.5 px-1 rounded-sm text-center cursor-pointer flex items-center">
                <AppButton to={'/jobs'}>
                  View All Jobs
              </AppButton>
                <FaArrowRight />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-2 gap-5 xl:gap-6 pt-8 pb-8">
              {jobs.slice(0, 3).map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>

        <section className="p-4 md:p-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-center font-semibold text-4xl">
              Why Use Our Platform?
            </h2>
            <p className="text-center text-sm lg:text-lg lg:max-w-2xl lg:mx-auto">
              We make job searching simple, fast and effective. Our platform
              connects you with the right opprtunities and the right employers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-6 py-8">
              <div className="flex items-start hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-4 sm:px-8 border-2 border-gray-100 rounded-sm gap-4 shadow-md max-w-sm mx-auto">
                <div className="bg-cyan-100 p-3 rounded-4xl">
                  <LuZap className="text-4xl text-cyan-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Fast & Easy Search</h3>
                  <p className="text-sm">
                    Find jobs that match your skills and preferences with
                    powerful search and filters.
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 sm:px-8 gap-4 border-2 border-gray-100 rounded-sm shadow-md max-w-sm mx-auto hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="bg-cyan-100 p-3 rounded-4xl">
                  <FiBookmark className="text-4xl text-cyan-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Save & Track jobs</h3>
                  <p className="text-sm">
                    Find jobs that match your skills and preferences with
                    powerful search and filters.
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 sm:px-8 gap-4 border-2 border-gray-100 rounded-sm shadow-md max-w-sm mx-auto hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="bg-cyan-100 p-3 rounded-4xl">
                  <LuShieldCheck className="text-4xl text-cyan-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Secure & Reliable</h3>
                  <p className="text-sm">
                    Find jobs that match your skills and preferences with
                    powerful search and filters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <AppFooter/>
    </>
  );
}

export default HomePage;
