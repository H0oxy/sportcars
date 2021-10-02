const User = ({user}) => {
    console.log('project:', user);
    return (
        <tr className="project-row">
            <td>
                {user.id}
            </td>
            <td>
                {user.username}
            </td>
            <td>
                {user.date_birth}
            </td>

        </tr>
    )
}

const UserList = ({users}) => {
    console.log('projects:', users);
    return (
        <table className={"Cars"}>
            <thead>
            <tr>
                <th>id</th>
                <th>username</th>
                <th>date bitrh</th>

            </tr>
            </thead>
            <tbody>
            {/*{projects.map(Project)}*/}
            {users.map((user) => <User key={user.id} user={user}/>)}
            </tbody>
        </table>
    )
}

export default UserList;