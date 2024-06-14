import "../styles/project.css";

function Project() {
    return (
        <>
            <div className="project" id="project">
                <h1> PROJECTS </h1>
                <div className="projects">
                    <ol>
                        <li><h3>Bar-restau front-end</h3></li> 
                        <p>Developped using React, open this<a href="https://github.com/angebhd/bar-restau-client" target="_blank" rel="noreferrer"> Github repository</a> for more</p>

                        <li><h3>Bar-restau back-end</h3></li> 
                        <p>Developped using node, express and MongoDB, opent this<a href="https://github.com/angebhd/bar-restau-server" target="_blank" rel="noreferrer"> Github repository</a> for more</p>

                        <li><h3>Mon blog</h3></li> 
                        <p>Developped using plain HTML, CSS and PHP, open this<a href="https://github.com/angebhd/monblog" target="_blank" rel="noreferrer"> Github repository</a> for more</p>


                    </ol>

                </div>
            </div>
        </>
    )

}

export default Project;