import {NavLink} from "react-router-dom";
const Header = () => {
    return ( 
        <nav className="navbar bg-dark justify-content-center mb-5">
                <ul className="nav d-flex flex-row ">
                    <li className="nav-item">
                        <NavLink 
                            to="/" 
                            className={({ isActive  }) => isActive  ? "nav-link lienActif" : "nav-link lienNonActif"}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({ isActive  }) => isActive  ? "nav-link lienActif" : "nav-link lienNonActif"}
                            to="/rendez-vous"
                        >
                            Mes rendez-vous 
                        </NavLink>
                    </li>
                </ul>
        </nav>
    );
}

export default Header;