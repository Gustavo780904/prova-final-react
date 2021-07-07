import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'

import '../css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// import '../css/bootstrap.css'

class Header extends Component {
    render() {
        return (

            <header>
                <nav className=" navbar-expand-lg navbar-light bg-light">
                    {/* <a className="navbar-brand" href="#"></a> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar navbar-collapse navbar-light bg-dark m-auto  justify-content-md-center" id="conteudoNavbarSuportado">
                        <ul className="navbar-nav mr-auto ml-auto" role="navigation">
                            <li><Link className="button btn-lg btn btn-outline-light" to="/">Home</Link></li>
                            <li><Link className="button btn-lg btn btn-outline-light" to="/login">Login</Link></li>
                            <li><Link className="button btn-lg btn btn-outline-light" to="/calculadora">Calculadora</Link></li>
                            <li><Link className="button btn-lg btn btn-outline-light" to="/conversor">Conversor</Link></li>
                            <li><Link className="button btn-lg btn btn-outline-light" to="/faleconosco">Fale conosco</Link></li>
                        </ul>
                
                    </div>
                </nav>
            </header>

        );
    }
}

export default Header;