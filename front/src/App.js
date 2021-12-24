import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarsList from "./components/CarList";
import CarsDetail from "./components/CarDetail"
import UserList from "./components/UserList";
import axios from "axios";
import LoginForm from "./components/LoginForm";

const API_URL = "http://127.0.0.1:8000";
const getResourceURL = (suffix) => `${API_URL}/api/${suffix}/`;


class App extends React.Component {
    constructor(props) {
        super(props);  // parent constructor
        this.state = {
            manufacturers: [],
            car: [],
            users: [],
            accessToken: this.getAccessToken(),

        };
    }


    componentDidMount() {
        this.loadState()
    }


    loadState() {
        let headers = this.getHeaders();
        // call rest API

        axios
            .get(getResourceURL("users"), {headers: headers})
            .then((result) => {
                this.setState({
                    users: result.data
                })
            })
            .catch((error) => console.log(error));

        axios
            .get(getResourceURL("manufacturer"), {headers: headers})
            .then((result) => {
                this.setState({
                    manufacturers: result.data
                })
            })
            .catch((error) => console.log(error));

        axios
            .get(getResourceURL("car"), {headers: headers})
            .then((result) => {
                this.setState({
                    car: result.data
                })
            })
            .catch((error) => console.log(error));


    }


    login(username, password) {
//        console.log('do login:', username, password,);
        axios
            .post(getResourceURL("token"),
                        {'username': username,'password': password})
            .then((result) => {
                let refreshToken = result.data.refresh;
                let accessToken = result.data.access;

                this.saveTokens(refreshToken, accessToken)
                this.setState({accessToken: accessToken}, this.loadState)
            })
            .catch((error) => console.log(error));
        }

    logout() {
            localStorage.setItem('refreshToken', null);
            localStorage.setItem('accessToken', null);
            this.clearState();
    }

    clearState() {
        this.setState({
        accessToken: null,
        users: [],
        manufacturer: [],
        car: [],
        });

    }

        saveTokens(refreshToken, accessToken) {
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('accessToken', accessToken);
//            console.log('accessToken:', localStorage.getItem('accessToken'), accessToken);
        }

        getAccessToken() {
            return localStorage.getItem('accessToken')
        }

        isAuthenticated() {
            return this.state.accessToken !== 'null' && this.state.accessToken !== null;
        }

        getHeaders() {
            let headers = {
                'Content-Type': "application/json"
            }
        if (this.isAuthenticated()) {
               headers['Authorization'] = `Bearer ${this.state.accessToken}`
        }
        return headers;
        }


    render() {
        //console.log('state', this.state);
        return (
            <div className="main">
                <Router>
                    <Header isAuthenticated={this.isAuthenticated()}
                        logout={() => this.logout()}/>

                    <Route exact path="/users">
                        <UserList users={this.state.users}/>
                    </Route>
                    <Route exact path="/cars">
                        <CarsList cars={this.state.car}/>
                    </Route>
                    <Route exact path="/cars/detail/:id">
                        <CarsDetail cars={this.state.car}/>
                    </Route>
                    <Route exact path="/login">
                        <LoginForm
                            login={(username, password) => this.login(username, password)}/>
                    </Route>
                </Router>
                <Footer/>
            </div>
        )
    }
}


export default App;