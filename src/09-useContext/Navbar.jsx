import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">useContext</Link>
                    <div className=" navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => {
                                        return isActive ? 'nav-link active fw-bold' : 'nav-link'
                                    }} to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => {
                                        return isActive ? 'nav-link active fw-bold' : 'nav-link'
                                    }} to="/login">
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => {
                                        return isActive ? 'nav-link active fw-bold' : 'nav-link'
                                    }} to="/about">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

}