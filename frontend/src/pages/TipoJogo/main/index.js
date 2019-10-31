import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tipojogos: [],
            erro: null
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3006/sistema/tipojogos`)
            .then(tipojogos =>
                tipojogos.json().then(tipojogos => this.setState({ tipojogos }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { tipojogos } = this.state;
        return tipojogos.map((tipojogos, index) => (

            <div className="tipojogos-info">
                <div key={index} className="card mb-4">
                    <h5 className="card-header">{tipojogos.nome}</h5>
                    <div className="card-body">
                        <div className="media">
                           <p><strong>{tipojogos.matricula}</strong></p>
                        </div>
                        <div className="text-right">
                            <Link
                                to={`/DetalhesTipoJogos/${tipojogos.id}`}
                                className="btn btn-success mr-3"
                                role="button"
                            >
                                Detalhes
              </Link>
                            <Link
                                to={`/DeletarTipoJogos/${tipojogos.id}`}
                                className="btn btn-danger mr-3"
                                role="button"
                            >
                                Remover
              </Link>
                            <Link
                                to={`/EditarTipoJogos/${tipojogos.id}`}
                                className="btn btn-primary"
                                role="button"
                            >
                                Editar
              </Link>
                        </div>
                    </div>
                </div>
            </div>
        ))
    };
}