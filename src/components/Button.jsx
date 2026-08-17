import { NavLink } from "react-router-dom"

function AppButton({children , to}){
    return(
        <div>
            <NavLink
              to={to}
              className="inline-block py-2 px-2.5 cursor-pointer font-semibold text-sm"
            >
              {children}
            </NavLink>
        </div>
    )
}

export default AppButton