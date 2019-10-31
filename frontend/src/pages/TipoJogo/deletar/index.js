import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class DeletarTipoJogo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tipojogo: {},
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

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3006/sistema/tipojogo/${id}`)
            .then(data => {
                data.json().then(data => {
                    if (data.error) {
                        this.setState({ erro: data.error });
                    } else {
                        this.setState({ tipojogo: data });
                    }
                });
            })
            .catch(erro => this.setState({ erro: erro }));
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />;
        } else {
            return (
                <div className="card">
                    <h5 className="card-header">{this.state.tipojogo.nome}</h5>
                    <div className="card-body">
                        {this.exibeErro()}
                        <p>
                            Tem certeza que deseja remover esse tipo de jogo? As pessoas podem
                            sentir falta dele :/
            </p>
                        
                        <button
                            className="btn btn-danger btn-block"
                            role="button"
                            onClick={this.handleClick}
                        >
                            Remover
                        </button>

                        <Link
                            to={`/`}
                            className="btn btn-success btn-block"
                            role="button"
                        >
                            Voltar
              </Link>
                    </div>
                </div>
            );
        }
    }

    handleClick = event => {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3006/sistema/tipojogos/${id}`, {
            method: "delete"
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

export default DeletarTipoJogo;
