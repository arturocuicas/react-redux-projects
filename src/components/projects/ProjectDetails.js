import React from 'react'

const ProjectDetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, architecto aspernatur aut
                        deserunt distinctio eaque earum ex explicabo illum ipsam itaque molestias obcaecati odio praesentium quisquam ratione tempora totam voluptatem.</p>
                </div>
            </div>
            <div className="card-action gret lighten-4 grey-text">
                <div>Posted by the Net Ninja</div>
                <div>2nd Septiembre, 2 am</div>
            </div>
        </div>
    )
};

export default ProjectDetails