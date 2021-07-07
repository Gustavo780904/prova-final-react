import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { username: '', pwd: '' }
    } valida = () => {
        if (this.state.username == "prova" && this.state.pwd == "react")
            alert('Ok!')
        else alert("Digite o login e a senha.")
    }
    updateData = (event) => { this.setState({ [event.target.name]: event.target.value }) }
    render() {
        return (
            <div className="container">
                  <h2>Login</h2>
                  <fieldset>
                        <form className="form-group ">
                            <input type="text" placeholder="Usuário" name="username" value={this.state.username} onChange={this.updateData} /><br />
                            <input type="password" placeholder="Senha" name="pwd" value={this.state.pwd} onChange={this.updateData} /><br />
                            <button onClick={this.valida}>Entrar</button>
                        </form>
                        </fieldset>
            </div>
        );
    }
}

export default Login;