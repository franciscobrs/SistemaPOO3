import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class CriarHorario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            horario: {
                data: "",
                hora_inicio: "",
                hora_fim: "",
            },
            erro: null,
            redirect: false
        };
    }

    exibeErro() {
        const { erro } = this.state;

        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de conexão com o servidor
        </div>
            );
        }
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    {this.exibeErro()}

                    <fieldset>
                        <legend>Adicionar horario</legend>

                      
                        <div className="form-group">
                        <label htmlFor="nome">Data</label>
                            <input
                                type="date"
                                className="form-control"
                                id="data"
                                name="data"
                              
                                value={this.state.horario.data}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nome">Hora de inicio</label>
                            <input
                                type="time"
                                className="form-control"
                                id="hora_inicio"
                                name="hora_inicio"
                                value={this.state.horario.hora_inicio}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                        <label htmlFor="nome">Fim do horário</label>
                            <input
                                type="time"
                                className="form-control"
                                id="hora_fim"
                                name="hora_fim"
                                
                                value={this.state.horario.hora_fim}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Adicionar horário
            </button>
                    </fieldset>
                </form>
            );
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            horario: { ...prevState.horario, [name]: value }
        }));
    };

    handleSubmit = event => {
        fetch("http://localhost:3006/sistema/horarios", {
            method: "post",
            body: JSON.stringify(this.state.horario),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                } else {
                    data.json().then(data => {
                        if (data.error) {
                            this.setState({ erro: data.error });
                        }
                    });
                }
            })
            .catch(erro => this.setState({ erro: erro }));

        event.preventDefault();
    };
}

export default CriarHorario;
