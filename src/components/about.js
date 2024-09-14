import "../styles/about.css";

function About() {

    return (
        <>

            <div className="about" id="about">
                <h1>ABOUT ME</h1>

                <div className="bio">
                    <h2> Bio </h2>
                    <p> Hello, I am <strong> Ange BUHENDWA </strong>, a bachelor's student in <em> Information Technology </em> ( major in Network and communication systems) and a <em>web developer</em>. My tech journey began in high school with a passion for electronics and software development. I am proficient in HTML, CSS, PHP, and JavaScript, and I'm currently expanding my full-stack skills by learning Node.js and React.</p>
                    <p>
                        My interests lie in <em>software development</em> and <em>cybersecurity</em>, with a particular focus on <em>backend development</em>. I believe in integrating hardware and software to create robust systems. Eager to tackle new challenges and ready to work.
                    </p>
                </div>
                <br></br>
                <br></br>

                <div className="certifications">
                    <h2> Certifications </h2>
                    <ol>
                        <li> Junior software development, from <strong><a href="https://app.bag.work/certificate/303767cc-9d18-4b82-ada7-ac4a52b0f215" target="_blank" rel="noreferrer"> BAG </a></strong> </li>
                        <li> Advanced Network Operations, from <strong><a href="https://certificates.isoc.org/50db0a66-3e96-49c1-9e81-6ac5f9319947#gs.8f69tg" target="_blank" rel="noreferrer"> Internet Society </a></strong> </li>
                        <li> Network security, from<strong><a href="https://www.credly.com/badges/29a1b73d-ac83-48cb-a089-a9f543f1b4a3/public_url" target="_blank" rel="noreferrer"> NETACAD </a></strong> (Cisco Networking Academy)</li>
                        <li> Responsive Web Design, from <strong><a href="https://www.freecodecamp.org/certification/angebhd/responsive-web-design" target="_blank" rel="noreferrer"> freeCodeCamp </a></strong> </li>

                    </ol>
                </div>

                <br></br>
                <br></br>

                <div className="skills">
                    <h2> Skills </h2>
                    <h3>Programming languages and Frameworks: </h3>
                    <ul>
                        <li> HTML/CSS/JavaScript </li>
                        <li> ReactJS/node/express </li>
                        <li> mongoDB/MySQL/postgreSQL </li>
                        <li> PHP </li>
                    </ul>
                    <h3> Computer Networks </h3>
                    <h3> Electronic enginnering </h3>
                </div>
                <p className="p-resume"> &#10174; Download my <a href="assets/cv.pdf">resume</a></p>

                <br></br>
                <br></br>
                <br></br>


            </div>

        </>
    )
}

export default About