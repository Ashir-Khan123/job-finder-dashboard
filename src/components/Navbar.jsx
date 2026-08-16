import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { SiWebmoney } from "react-icons/si";
import { Link } from "react-router-dom";

function AppNavbar(){
    const [menu , setMenu] = useState(false)
    return(
        <div>
            <nav className="flex items-center justify-between bg-gray-200 p-3">
                <div className="flex items-center gap-1 font-semibold">
                    <SiWebmoney/>
                    <span>JobFinder</span>
                </div>
                <ul className="absolute">
                    <Link><li>Home</li></Link>
                    <Link><li>Jobs</li></Link>
                    <Link><li>Contact</li></Link>
                </ul>
                <div>
                    <div className="hidden md:block">
                        <Link><button>Browse Jobs</button></Link>
                    </div>
                    <div className="cursor-pointer md:hidden" onClick={() => {setMenu(menu => !menu)}}>
                        {
                            menu ?
                            <LuX size={20} strokeWidth={2.5} />
                            :
                            <LuMenu size={20} strokeWidth={2.5}/>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AppNavbar