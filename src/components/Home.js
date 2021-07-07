import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (

            <main>
                <section className="container">
                    <div className="col-md-12">
                        <h1>Seja bem vindo!</h1>
                        <p>Qual dos serviços abaixo você gosta de utilizar?</p>
                            
                            
                    </div>
                    <div className="row ml-auto mr-auto">
                        <div className="col-md-4 card">
                        <Link to="/login"><img src="./img/converte.png" alt="" /></Link>
                            <p>Login</p>
                            
                        </div>
                        <div className="col-md-4 card">

                        <Link  to="/calculadora" ><img src="./img/calcula.png" alt="" /></Link>
                            <p>Calculadora</p>
                        
                        </div>
                        <div className="col-md-4 card">

                        <Link  to="/convercor"> <img src="./img/login.png" alt="" /></Link>
                            <p>Conversor</p>
                        </div>
                    </div>

                </section>
             
            </main>

        );
    }
}

export default Home;