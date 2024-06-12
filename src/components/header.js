import { Link } from "react-router-dom"

function Header() {
    function toggleNav() {
        let nav = document.getElementsByTagName('nav');
        let btn = document.getElementsByClassName("menu-button");
        if (nav[0].className === 'nav') {
            nav[0].className += " show";
            // btn[0].innerHTML =  "&#10060; CLOSE";

            btn[0].innerHTML = "✖ CLOSE";
        } else {
            nav[0].className = 'nav';
            btn[0].innerHTML = "☰ MENU";
        }

    }


    return (
        <header>
            <button className="menu-button" onClick={toggleNav}>☰ MENU</button>
            <nav className="nav">
                <hr></hr>
                <p><Link to="/">HOME</Link></p>  <hr></hr>
                <p><Link to="/about">ABOUT ME</Link></p>  <hr></hr>
                <p><Link to="/project">PROJECTS</Link></p>  <hr></hr>
                <p><a href="/blog.html">BLOG</a></p>
            </nav>
        </header>
    )
}

export default Header