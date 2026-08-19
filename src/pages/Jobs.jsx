import AppFooter from "../components/Footer.jsx"
import JobCard from "../components/JobCard.jsx"
import AppNavbar from "../components/Navbar.jsx"
import SearchBar from "../components/SearchBar.jsx"
import { jobs } from "../data/jobs.js"

function JobsPage(){
    
    const handleSearch = (val) => {
        console.log('value : ', val);
    }
    
    return(
        <div>
            <AppNavbar/>
            <main>
                <section className="mt-24 py-12">
                    <SearchBar showJobType={true} onSearch={handleSearch} />
                </section>
                <section className="px-5 py-11">
                    <p className="text-xl text-gray-700 font-bold py-6">Jobs For You</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8">
                        {
                            jobs.slice(0 , 9).map((job) => (
                                <JobCard key={job.id} job={job} />
                            ))
                        }
                    </div>
                </section>
            </main>
            <AppFooter/>
        </div>
    )
}

export default JobsPage