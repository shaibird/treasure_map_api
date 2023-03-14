import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import myLogo from "./Treasure.svg"



export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <nav className="navbar-container">
            <nav className="nav-right">
                <Link className="nav-right" to="/explore">Explore</Link>
                <Link className="nav-right" to="/home">Home</Link>
            </nav>
            <img className="nav-logo" src={myLogo} alt={"Treasure Map Logo"} />
            <nav className="nav-left">
            {
                (localStorage.getItem("tm_token") !== null) ?
                    <ul className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("tm_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </ul> :
                    <>
                        <ul className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </ul>
                        <ul className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </ul>
                    </>
            }        </nav>
            </nav>
    )
}

