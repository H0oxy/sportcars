import {NavLink as Link} from "react-router-dom";
import React from "react";

const Car = ({car}) => {
//{    console.log('car:', car);}
    return (
        <tr className="cars-list">

            <td>
                {car.id}
            </td>
            <td>
                {car.car_brand}
            </td>
            <td>

                <Link to={`/car/detail/${car.id}`} className="nav-link">
                    {car.model}
                </Link>
            </td>
            <td>
                {car.price}
            </td>
            <td>
                {car.max_speed}
            </td>
            <td>
                <Link to={`/cars/delete/${car.id}`} className="nav-link">
                    delete
                </Link>
            </td>
        </tr>
    )
}

const CarList = ({cars}) => {
    // console.log('car:', cars);
    return (
        <table className={"cars-list__table"}>
            <thead>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
                <th>Price</th>
                <th>Speed</th>
            </tr>
            </thead>
            <body>
            {cars.map((car) => <Car key={car.id} car={car}/>)}
            </body>
        </table>
    )
}

export default CarList;
