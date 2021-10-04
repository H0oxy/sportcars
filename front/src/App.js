import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router, NavLink as Link, Route} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarsList from "./components/Project";
import UserList from "./components/User";

const usersMock = [
    {
        "id": 1,
        "username": "kpk",
        "email": "kpk.kss45@mail.ru",
        "first_name": "",
        "last_name": "",
        "gender": "",
        "date_birth": null
    },
    {
        "id": 2,
        "username": "user1",
        "email": "",
        "first_name": "",
        "last_name": "",
        "gender": "m",
        "date_birth": "2021-09-04"
    },
    {
        "id": 3,
        "username": "user2",
        "email": "",
        "first_name": "",
        "last_name": "",
        "gender": "m",
        "date_birth": "2021-09-04"
    },
    {
        "id": 4,
        "username": "user3",
        "email": "",
        "first_name": "",
        "last_name": "",
        "gender": "f",
        "date_birth": "2021-09-04"
    },
    {
        "id": 5,
        "username": "user4",
        "email": "",
        "first_name": "",
        "last_name": "",
        "gender": "f",
        "date_birth": "2021-09-04"
    },
    {
        "id": 6,
        "username": "user5",
        "email": "",
        "first_name": "",
        "last_name": "",
        "gender": "f",
        "date_birth": "2021-09-04"
    }
];

const manufacturersMock = [
    {
        "id": 1,
        "name": "Audi"
    },
    {
        "id": 2,
        "name": "Tesla"
    },
    {
        "id": 3,
        "name": "Porsche"
    },
    {
        "id": 4,
        "name": "Lamborghini"
    },
    {
        "id": 5,
        "name": "McLaren"
    }
];

const carsMock = [
    {
        "id": 1,
        "model": "A4",
        "max_speed": "250",
        "price": "2 835 000",
        "release_date": "2021-10-02T12:43:38.818006Z",
        "desc": "Выразительная динамичная передняя часть, идеальные пропорции кузова и запоминающийся силуэт подчеркивают главную, спортивную составляющую характера обновленного Audi A4. Выполненный в лучших традициях марки, тщательно продуманный, функциональный и высококачественный, автомобиль оснащен новейшими информационно-развлекательными и ассистирующими системами, созданными с применением инновационных технологий. Дополняет этот быстрый «портрет» модели безупречно оформленный стильный интерьер и линейка мощных современных двигателей.",
        "car_brand": "Audi",
    },
    {
        "id": 2,
        "model": "A5 Sportback quattro",
        "max_speed": "250",
        "price": "3 935 000",
        "release_date": "2021-10-02T12:44:35.396120Z",
        "desc": "Купить обновленный Audi A5 Sportback — прекрасный способ подчеркнуть свою индивидуальность. Этот спортивный и одновременно практичный семейный пятидверный автомобиль – образец самого современного дизайна марки Audi и одновременно носитель перспективных технологий, таких, как, например, опицональные светодиодные фары Audi Matrix c Audi Laser Light и светодиодные задние фонари, с передними и задними динамическими указателями поворота, с анимацией и новая информационно-развлекательная система.",
        "car_brand": "Audi",
    },
    {
        "id": 3,
        "model": "A8",
        "max_speed": "322",
        "price": "7 360 000",
        "release_date": "2021-10-02T12:45:59.989902Z",
        "desc": "Превосходство технологий — это то, что мы обещаем всем поклонникам нашего бренда. И никогда прежде это обещание не было реализовано так разносторонне и так полно, как в Audi A8. Он знаменует собой рождение нового языка дизайна, новой концепции управления, нового уровня качества. Audi A8 представляет будущее автомобилей премиум-класса.",
        "car_brand": "Audi",
    },
    {
        "id": 4,
        "model": "S",
        "max_speed": "322",
        "price": "3 000 000",
        "release_date": "2021-10-02T12:46:57.547140Z",
        "desc": "Революционный электромобиль, призванный полностью уничтожить двигатель внутреннего сгорания и привить человечеству желание передвигаться исключительно на экологически чистом транспорте.",
        "car_brand": "Tesla",
    },
    {
        "id": 5,
        "model": "3",
        "max_speed": "261",
        "price": "3 500 000",
        "release_date": "2021-10-02T12:48:39.159202Z",
        "desc": "Построен на новой платформе, которая в корне отличается от Model S и Model X. Призван стать первым массовым электромобилем от Tesla Inc.",
        "car_brand": "Tesla",
    },
    {
        "id": 6,
        "model": "RoadSter",
        "max_speed": "402",
        "price": "19 100 000",
        "release_date": "2021-10-02T12:50:01.844881Z",
        "desc": "САМЫЙ БЫСТРЫЙ АВТОМОБИЛЬ В МИРЕ С РЕКОРДНЫМ УСКОРЕНИЕМ, ДАЛЬНОСТЬЮ И ПРОИЗВОДИТЕЛЬНОСТЬЮ",
        "car_brand": "Tesla",
    },
    {
        "id": 7,
        "model": "718",
        "max_speed": "275",
        "price": "5 060 000",
        "release_date": "2021-10-02T12:51:04.376899Z",
        "desc": "",
        "car_brand": "Porsche",
    },
    {
        "id": 8,
        "model": "911",
        "max_speed": "310",
        "price": "8 790 000",
        "release_date": "2021-10-02T12:51:34.746195Z",
        "desc": "",
        "car_brand": "Porsche",
    },
    {
        "id": 9,
        "model": "Panamera",
        "max_speed": "310",
        "price": "7 970 000",
        "release_date": "2021-10-02T12:52:04.465900Z",
        "desc": "",
        "car_brand": "Porsche",
    },
    {
        "id": 10,
        "model": "Huracan",
        "max_speed": "325",
        "price": "16 500 000",
        "release_date": "2021-10-02T12:55:10.921115Z",
        "desc": "суперкар выделяется иным передним бампером со сплиттером и увеличенными боковыми воздухозаборниками. Последние имеют Y-образные вставки.",
        "car_brand": "Lamborghini",
    },
    {
        "id": 11,
        "model": "Aventador S Roadster 2018",
        "max_speed": "350",
        "price": "33 500 000",
        "release_date": "2021-10-02T12:56:26.251693Z",
        "desc": "Новый Ламборгини Авентадор S 2018 имеет съемные панели крыши, которые легко убираются и устанавливаются обратно. Масса секций не превышает 6 кг, а хранить их можно в багажном отсеке, который на суперкаре находится спереди.",
        "car_brand": "Lamborghini",
    },
    {
        "id": 12,
        "model": "Aventador S",
        "max_speed": "350",
        "price": "33 561 211",
        "release_date": "2021-10-02T12:57:47.306985Z",
        "desc": "Ламборгини Авентадор S 2018 имеет съемные панели крыши, которые легко убираются и устанавливаются обратно. Масса секций не превышает 6 кг, а хранить их можно в багажном отсеке, который на суперкаре находится спереди",
        "car_brand": "Lamborghini",
    },
    {
        "id": 13,
        "model": "600LT",
        "max_speed": "328",
        "price": "13 860 000",
        "release_date": "2021-10-02T13:00:35.307105Z",
        "desc": "Суперкар появился в 2019 году, производитель McLaren (Мсларен), располагающийся в стране Великобритания. Двигатель McLaren 600LT объёмом 3799 см³ развивает мощность 600 лошадиных сил, что позволяет автомобилю разгоняться до 100 километров в час за 2.9 секунды и развивать максимальную скорость 328 км/ч",
        "car_brand": "McLaren",
    },
    {
        "id": 14,
        "model": "Artura",
        "max_speed": "330",
        "price": "16 407 337",
        "release_date": "2021-10-02T13:02:10.435124Z",
        "desc": "Новая модель McLaren Artura получила продуманный до мелочей обтекаемый кузов с многочисленными вентиляционными отверстиями и воздухозаводами, способствующим притоку свежего воздуха к основным силовым агрегатам.",
        "car_brand": "McLaren",
    },
    {
        "id": 15,
        "model": "720S Spider 2019",
        "max_speed": "341",
        "price": "21 120 000",
        "release_date": "2021-10-02T13:16:30.610932Z",
        "desc": "Дизайн родстера максимально близок к облику купе 720S, но задние стойки даже с поднятым верхом выдают его. И специально для новичка компания придумала оригинальный рисунок кованых десятиспицевых колёсных дисков",
        "car_brand": "McLaren",
    }
];


class App extends React.Component {
    constructor(props) {
        super(props);  // parent constructor
        this.state = {
            manufacturers: [],
            car: [],
            users: [],

        };
    }

    componentDidMount() {
        // call API
        this.setState({
            manufacturers: manufacturersMock,
            car: carsMock,
            users: usersMock
        })
    }

    render() {
        //console.log('state', this.state);
        return (
            <div className="main">
                <Router>
                    <Header/>

                    <Route exact path="/users">
                        <UserList users={this.state.users}/>
                    </Route>
                    <Route exact path="/cars">
                        <CarsList cars={this.state.car}/>
                    </Route>

                </Router>
                <Footer/>
            </div>
        )
    }
}


export default App;