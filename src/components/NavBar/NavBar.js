import React, {useState} from "react";
import "./NavBar.css";
import logo from "../../assets/logo-V2.jpg";
import CV from "../../assets/cv stage.pdf";

const NavBar = () => {
    window.addEventListener("scroll", function() {
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })

    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className="logo">
                        <img src={logo} width={60} alt="logo"/>
                    </div>
                    <div className="navlink">
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">A propos</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href={CV} target="_blank" rel="noreferrer">CV</a>
                            </li>
                        </ul>
                        <button className="toggle" onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <i className="fas fa-times close home-btn"></i> : <i className="fas fa-bars open"></i>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar