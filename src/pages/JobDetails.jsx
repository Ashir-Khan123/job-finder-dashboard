import { useParams } from "react-router-dom"
import AppNavbar from "../components/Navbar.jsx"

function JobDetailsPage(){
    const {id} = useParams()
    return(
        <>
            {/* <AppNavbar/> */}
            <main>
                <p>This is job detail page and id : {id} </p>
            </main>
        </>
    )
}

export default JobDetailsPage