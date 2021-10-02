const Car = ({car}) => {
    console.log('car:', car);
    return (
        <tr className="project-row">
            <td>
                {car.manufacturer}
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

const carsList = ({cars}) => {
    console.log('car:', cars);
    return (
        <table className={"Cars"}>
            <thead>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
                <th>Price</th>
                <th>Speed</th>
            </tr>
            </thead>
            <body>
                {cars.map((car) => <Car key={car.manufacturer} car={car}/>)}
            </body>
        </table>
    )
}

export default carsList;
