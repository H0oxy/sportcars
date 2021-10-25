import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarsList from "./components/CarList";
import CarsDetail from "./components/CarDetail"
import UserList from "./components/UserList";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";
const getResourceURL = (suffix) => `${API_URL}/api/${suffix}/`;


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
        // call rest API
        axios
            .get(getResourceURL("users"))
            .then((result) => {
                // console.log('users result:', result)
                this.setState({
                    users: result.data
                })
            })
            .catch((error) => console.log(error));
        axios
            .get(getResourceURL("car"))
            .then((result) => {
                this.setState({
                    car: result.data
                })
            })
            .catch((error) => console.log(error));
        axios
            .get(getResourceURL("manufacturer"))
            .then((result) => {
                this.setState({
                    manufacturers: result.data
                })
            })
            .catch((error) => console.log(error));

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
                    <Route exact path="/cars/detail/:id">
                        <CarsDetail cars={this.state.car}/>
                    </Route>

                </Router>
                <Footer/>
            </div>
        )
    }
}


export default App;