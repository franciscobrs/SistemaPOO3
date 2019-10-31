import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class tipojogo extends Component {
    state = {
        tipojogo: {},
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3006/sistema/tipojogos/${id}`)
            .then(tipojogo =>
                tipojogo.json().then(tipojogo => this.setState({ tipojogo }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { tipojogo, index } = this.state;
        return (
            <div className="tipojogo-info">
                <div key={index} className="card mb-4">
                    <h5 className="card-header">{tipojogo.nome}</h5>
                    <div className="card-body">
                       
                        <div className="text-right">
                        <Link
                                to={`/tipojogo`}
                                className="btn btn-success mr-3"
                                role="button"
                            >
                                Voltar
              </Link>
                            <Link
                                to={`/DeletarUsuario/${tipojogo.id}`}
                                className="btn btn-danger mr-3"
                                role="button"
                            >
                                Remover
              </Link>
                            <Link
                                to={`/EditarUsuaio/${tipojogo.id}`}
                                className="btn btn-primary"
                                role="button"
                            >
                                Editar
              </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}