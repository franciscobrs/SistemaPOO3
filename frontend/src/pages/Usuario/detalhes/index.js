import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class usuario extends Component {
    state = {
        usuario: {},
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3006/sistema/usuario/${id}`)
            .then(usuario =>
                usuario.json().then(usuario => this.setState({ usuario }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { usuario, index } = this.state;
        return (
            <div className="usuario-info">
                <div key={index} className="card mb-4">
                    <h5 className="card-header">{usuario.nome}</h5>
                    <div className="card-body">
                        <div className="media">
                            <div className="media-body">
                                <h5 className="mt-0 mb-1">{usuario.telefone}</h5>
                                <p>{usuario.login}</p>
                                <p>{usuario.cpf}</p>
                                <p>{usuario.email}</p>
                                <p>{usuario.dataNascimento}</p>
                                
                            </div>
                        </div>
                        <div className="text-right">
                        <Link
                                to={`/usuario`}
                                className="btn btn-success mr-3"
                                role="button"
                            >
                                Voltar
              </Link>
                            <Link
                                to={`/DeletarUsuario/${usuario.id}`}
                                className="btn btn-danger mr-3"
                                role="button"
                            >
                                Remover
              </Link>
                            <Link
                                to={`/EditarUsuaio/${usuario.id}`}
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