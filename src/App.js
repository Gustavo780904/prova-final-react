import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Calculadora from './components/Calculadora';
import Conversor from './components/Conversor';
import Faleconosco from './components/Faleconosco'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/login"><Login/></Route>
                    <Route path="/calculadora"><Calculadora/></Route>
                    <Route path="/conversor"><Conversor/></Route>
                    <Route path="/faleconosco"><Faleconosco/></Route>
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;