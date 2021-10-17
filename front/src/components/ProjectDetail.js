import React from "react";
import {useParams} from "react-router";

const CarsDetail = ({cars, users}) => {
    let {id} = useParams();
    let car = cars.filter((item) => item.id === +id)[0];
    // car = filter(cars, lambda item: item.id == int(id));
    // console.log('this car:', car);
    // console.log('users', users);
    let owner = users.find((item) => car.owner === item.id);
    // console.log('owner', owner);
    let members = users.filter((item) => car.members.includes(item.id));
    // console.log('members', members);

    return (

        <div className={"car-detail"}>
            <h2>car: {car.name}</h2>
            <h3>Owner: {owner.username}</h3>
            <p>Created: {car.created}</p>
            <p>Updated: {car.updated}</p>
            <h4>Members:</h4>
            <ul>
                {members.map((item) => (
                    <li key={item.id}>{item.username}</li>
                ))}
            </ul>
            <p>Description: {car.desc}</p>
        </div>

    )
}

export default CarsDetail;