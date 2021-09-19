import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectList from "./components/Project";


const projectsMock = [
    {'manufacturer': "Tesla", 'model': "Model 3", 'price': "4 000 000 ₽", 'created': "2021-09-02"},
    {'manufacturer': "Audi", 'model': "RS7 Sportback", 'price': "10 145 000 ₽", 'created': '2021-09-07'},
    {'manufacturer': "Porsche", 'model': "911 Carrera", 'price': "8 790 000 ₽", 'created': '2021-09-16'},
];


class App extends React.Component {
    constructor(props) {
        super(props);  // parent constructor
        this.state = {
            manufacturer: [],
            projects: [],
            tasks: [],
        };
    }

    componentDidMount() {
        // call API
        this.setState({
            projects: projectsMock
        })
    }

    render() {
        console.log('state', this.state);
        return (
            <div>
                <Header/>
                Sportcars
                <ProjectList projects={this.state.projects}/>
                <Footer/>
            </div>
        )
    }
}

export default App;