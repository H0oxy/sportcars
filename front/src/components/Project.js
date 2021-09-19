const Project = ({project}) => {
    console.log('project:', project);
    return (
        <tr className="project-row">
            <td>
                {project.manufacturer}
            </td>
            <td>
                {project.model}
            </td>
            <td>
                {project.price}
            </td>
            <td>
                {project.created}
            </td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
    console.log('projects:', projects);
    return (
        <table className={"project-list"}>
            <thead>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
                <th>Price</th>
                <th>Created</th>
            </tr>
            </thead>
            <tbody>
            {/*{projects.map(Project)}*/}
            {projects.map((project) => <Project key={project.name} project={project}/>)}
            </tbody>
        </table>
    )
}

export default ProjectList;