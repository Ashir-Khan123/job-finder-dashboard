import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { SiWebmoney } from "react-icons/si";
import { Link } from "react-router-dom";

function AppNavbar(){
    const [menu , setMenu] = useState(false)
    return(
        <div>
            <nav className="flex items-center justify-between p-4 md:px-12 relative shadow-xl">
                <div className="flex items-center gap-1 text-2xl font-semibold">
                    <SiWebmoney/>
                    <span className="font-bold">Job<span className="text-cyan-500">Finder</span></span>
                </div>
                <ul className={`absolute top-full left-0 w-full bg-gray-200 flex-col items-start justify-center gap-4 p-2 font-bold md:static  md:bg-transparent md:w-auto md:whitespace-nowrap md:gap-12 md:flex md:flex-row md:items-center md:h-0 text-md cursor-pointer ${
                    menu ? `flex` : `hidden`
                }`}>
                    <li className="hover:text-cyan-500 hover:font-bold"><Link to={"/"}>Home</Link></li>
                    <li className="hover:text-cyan-500 hover:font-bold"><Link to={"/jobs"}>Jobs</Link></li>
                    <li className="hover:text-cyan-500 hover:font-bold"><Link to={"/saved-jobs"}>Saved Jobs</Link></li>  
                </ul>   
                <div>
                    <div className="hidden md:block bg-cyan-500 text-white rounded-sm hover:border-cyan-500 hover:bg-transparent hover:text-cyan-500">
                        <button className="py-1.5 px-2.5 cursor-pointer font-bold"><Link to={"/jobs"}>Browse Jobs</Link></button>
                    </div>
                    <div className="cursor-pointer md:hidden" onClick={() => {setMenu(menu => !menu)}}>
                        {
                            menu ?
                            <LuX size={25} strokeWidth={2.5} />
                            :
                            <LuMenu size={25} strokeWidth={2.5}/>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AppNavbar