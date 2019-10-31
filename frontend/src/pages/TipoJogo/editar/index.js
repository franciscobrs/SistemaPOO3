import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class EditarTipoJogo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tipojogo: {
                nome: ""
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
                        <legend>Criar Tipo de Jogo</legend>
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                name="nome"
                                placeholder="nome"
                                minLength="2"
                                maxLength="40"
                                value={this.state.tipojogo.nome}
                                onChange={this.handleInputChange}
                            />
                        </div>
                       
                        <button type="submit" className="btn btn-primary">
                            Send
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
            tipojogo: { ...prevState.tipojogo, [name]: value }
        }));
    };

    handleSubmit = event => {
        fetch("http://localhost:3006/sistema/tipojogos", {
            method: "post",
            body: JSON.stringify(this.state.tipojogo),
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

export default EditarTipoJogo;
