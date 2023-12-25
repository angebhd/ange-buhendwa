import { Link } from "react-router-dom"

function Header() {
    return(
        <header>
            <h1>Ange BUHENDWA</h1>
            <nav>

                <p><Link to="/">HOME</Link></p>
                <p><Link to="/blog">BLOG</Link></p>

            </nav>
        </header>
    )
}

export default Header