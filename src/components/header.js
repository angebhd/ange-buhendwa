import { Link } from "react-router-dom"

function Header() {
    function toggleNav() {
        let nav = document.getElementsByTagName('nav');
        let btn = document.getElementsByClassName("menu-button");
        if (nav[0].className === 'nav') {
            nav[0].className += " show";
            // btn[0].innerHTML =  "&#10060; CLOSE";

            btn[0].innerHTML = "✗ CLOSE";
        } else {
            nav[0].className = 'nav';
            btn[0].innerHTML = "☰ MENU";
        }

    }
    const handleNavigation = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    };


    return (
        <header>
            <button className="menu-button" onClick={toggleNav}>☰ MENU</button>
            <nav className="nav">
                <p><Link to="/home" onClick={ (e) => handleNavigation (e, "home")} >HOME</Link></p>
                <p><Link to="/#about" onClick={ (e) => handleNavigation (e, "about")} >ABOUT ME</Link></p>
                <p><Link to="/#project" onClick={ (e) => handleNavigation (e, "project")} >PROJECTS</Link></p>
                <p><Link to="/#contact" onClick={ (e) => handleNavigation (e, "contact")} >CONTACT</Link></p>

                <p className="blog-para"><Link to="/blog" >BLOG</Link></p>
            </nav>
        </header>
    )
}

export default Header