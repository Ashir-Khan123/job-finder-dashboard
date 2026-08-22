import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { SiWebmoney } from "react-icons/si";
import { NavLink } from "react-router-dom";
import AppButton from "./Button.jsx";

function AppNavbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <header className="fixed top-0 w-full z-50 left-0">
        <nav className="flex items-center justify-between p-3 md:px-12 relative shadow-lg bg-white">
        <div className="flex items-center gap-1 text-2xl font-semibold">
          <SiWebmoney />
          <span className="font-bold">
            Job<span className="text-cyan-600">Finder</span>
          </span>
        </div>
        <ul
          className={`absolute top-full left-0 w-full bg-gray-50 flex-col items-center justify-center gap-8 p-5 text-lg py-12 md:p-2 font-semibold md:static md:bg-transparent md:w-auto md:whitespace-nowrap md:gap-12 md:flex md:flex-row md:items-center text-md cursor-pointer text-gray-600 ${
            menu ? `flex` : `hidden`
          }`}
        >
          <li>
            <NavLink to={"/"} className={({isActive}) => 
            isActive && !menu ? 
            "text-cyan-500 border-b-2 pb-5 border-cyan-500"  
            : "hover:text-cyan-500"

          }>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/jobs"} className={({isActive}) =>  isActive && !menu ? "text-cyan-500 border-b-2 pb-5 border-cyan-500" : "hover:text-cyan-500" }>Jobs</NavLink>
          </li>
          <li>
            <NavLink to={"/saved-jobs"} className={({isActive}) => isActive && !menu ? "text-cyan-500 border-b-2 pb-5 border-cyan-500" : "hover:text-cyan-500"}>Saved Jobs</NavLink>
          </li>
        </ul>
        <div>
          <div className="hidden md:block bg-cyan-500 py-1 px-2 transition-all duration-300 ease-in-out hover:bg-cyan-600 hover:shadow-lg active:translate-y-0 text-white rounded-sm text-sm">
            <AppButton to="/jobs">
                Browse Jobs
            </AppButton>
          </div>
          <div
            className="cursor-pointer md:hidden"
            onClick={() => {
              setMenu((menu) => !menu);
            }}
          >
            {menu ? (
              <LuX size={30} strokeWidth={2.5} />
            ) : (
              <LuMenu size={30} strokeWidth={2.5} />
            )}
          </div>
        </div>
      </nav>
      </header>
    </div>
  );
}

export default AppNavbar;
