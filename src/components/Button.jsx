import { NavLink } from "react-router-dom"

function AppButton({children , to , onClick}){
    return(
        <div>
            <NavLink
              to={to}
              onClick={onClick}
              className="py-2 px-2 cursor-pointer font-semibold text-sm whitespace-nowrap"
            >
              {children}
            </NavLink>
        </div>
    )
}

export default AppButton