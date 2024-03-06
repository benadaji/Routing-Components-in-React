import { NavLink, Outlet } from "react-router-dom";


export default function HelpLayout() { 
    return(
        <div className="help-layout">
            <h2> Website Help</h2>
            <p>Lorem Ipsum Dolor</p>

            <nav>
                <NavLink to="faq"> View The FaQ</NavLink>
                <NavLink to="contact"> Contact Us </NavLink>
            </nav>
            
            <Outlet />

        </div>
    )
 };

