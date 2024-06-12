import "../styles/home.css"
import { Link } from "react-router-dom"


function Home() {
    return (
        <>
            <div id="home">

                <div className="img"> <img src="https://avatars.githubusercontent.com/u/143657234?v=4" alt="Ange BUHENDWA" ></img> </div>
                <div className="details">
                    <h1>Hey, I am Ange BUHENDWA</h1>
                    <h3>IT student</h3>
                    <h3>Web developer</h3>
                    <h3>Electronic Engineer</h3>
                </div>
            </div>
            <hr></hr>
            <p className="more-par"><Link to="/about">ABOUT ME</Link> </p>
            <hr></hr>
            <p className="github"><a href="https://github.com/angebhd" target="_blank" rel="noreferrer">Visit my Github <br /><br /> <i className='fab fa-github'></i></a></p>
            <hr></hr>
            <div className="container">
                <button>Contact</button>
                <p><a href="mailto: mickaelbhd@gmail.com" target="_blank" rel="noreferrer"><i className='fas fa-envelope'></i></a> <br /> Mail </p>
                <p><a href="https://www.linkedin.com/in/angebhd" target="_blank" rel="noreferrer"><i className='fab fa-linkedin'></i></a><br /> LinkedIn</p>
                <p><a href="https://twitter.com/angebhd" target="_blank" rel="noreferrer"><i className='fab fa-twitter'></i></a> <br /> Twitter </p>
                <p><a href="https://wa.me/+250722953397" target="_blank" rel="noreferrer"><i className='fab fa-whatsapp'></i></a> <br /> Whatsapp </p>
            </div>
        </>
    )
}

export default Home