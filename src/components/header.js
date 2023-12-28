import { Link } from "react-router-dom"

function Header() {
    return(
        <header>
            <nav>

                <p><Link to="/">HOME</Link></p>
                <p><Link to="/about">ABOUT</Link></p>
                <p><a href="/blog.html">BLOG</a></p>

            </nav>
        </header>
    )
}

export default Header