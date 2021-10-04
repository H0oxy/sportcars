const Car = ({car}) => {
//{    console.log('car:', car);}
    return (
        <tr className="cars-list">

            <td>
                {car.car_brand}
            </td>
            <td>
                {car.model}
            </td>
            <td>
                {car.price}
            </td>
            <td>
                {car.max_speed}
            </td>
        </tr>
    )
}

const CarsList = ({cars}) => {
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

export default CarsList;
