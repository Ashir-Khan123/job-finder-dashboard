import { Route, Routes } from "react-router-dom";
import JobsPage from "../pages/Jobs.jsx";
import HomePage from "../pages/Home.jsx";
import JobDetailsPage from "../pages/JobDetails.jsx";
import SavedJobsPage from "../pages/SavedJobs.jsx";

function AppRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/jobs" element={<JobsPage/>} />
                <Route path="/job-details/:id" element={<JobDetailsPage/>} />
                <Route path="/saved-jobs" element={<SavedJobsPage/>} />
            </Routes>
        </div>
    )
}

export default AppRoutes