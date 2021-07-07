import React, { Component } from 'react';

class Calculadora extends Component {
    constructor(props) {
        super(props);
        this.state = { value1: "", value2: "", resultado: 0 };
    }

    updateData = (event) => {
        this.setState({ [event.target.name]: (event.target.value) });
    }
    calculaSoma = () => {
        var resultado;
        if (this.state.value1)
            resultado = parseFloat(this.state.value1) + parseFloat(this.state.value2);
        return this.setState({ resultado: resultado });
    }
    calculaSub = () => {
        var resultado;
        resultado = parseFloat(this.state.value1 - this.state.value2);
        return this.setState({ resultado: resultado });
    }
    calculaMult = () => {
        var resultado;
        resultado = parseFloat(this.state.value1 * this.state.value2);
        return this.setState({ resultado: resultado });
    }
    calculaDiv = () => {
        var resultado;
        (this.state.value2 != 0) ? resultado = parseFloat(this.state.value1 / this.state.value2) : alert("Impossível calcular divisão por 0.")
        return this.setState({ resultado: resultado.toFixed(2) });
    }
    render() {
        return (
            <div className="cotainer">
            <h1>Calculadora</h1>
            <form className="form-group">
                <input type="number" name="value1" value={this.state.value1} onChange={this.updateData} placeholder="Valor 1" />
                <input type="number" name="value2" value={this.state.value2} onChange={this.updateData} placeholder="Valor 2" />
                <input className="button bnt bnt-light" type="button" value={"+"} onClick={this.calculaSoma} />
                <input type="button" value={"-"} onClick={this.calculaSub} />
                <input type="button" value={"x"} onClick={this.calculaMult} />
                <input type="button" value={"÷"} onClick={this.calculaDiv} />
                <input type="text" value={this.state.resultado} readOnly />
            </form>
        </div>
        );
    }
}

export default Calculadora;

