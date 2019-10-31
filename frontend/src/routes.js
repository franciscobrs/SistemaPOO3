import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainUsuario from './pages/Usuario/main';
import DetalhesUsuario from './pages/Usuario/detalhes';
import CriarUsuario from './pages/Usuario/criar';
import DeletarUsuario from './pages/Usuario/deletar';
import EditarUsuario from './pages/Usuario/editar';

import MainHorario from './pages/Horario/main';
import DetalhesHorario from './pages/Horario/detalhes';
import CriarHorario from './pages/Horario/criar';
import DeletarHorario from './pages/Horario/deletar';
import EditarHorario from './pages/Horario/editar';

import MainTipoJogo from './pages/TipoJogo/main';
import DetalhesTipoJogo from './pages/TipoJogo/detalhes';
import CriarTipoJogo from './pages/TipoJogo/criar';
import DeletarTipoJogo from './pages/TipoJogo/deletar';
import EditarTipoJogo from './pages/TipoJogo/editar';


const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/Usuario" component={MainUsuario} />
            <Route path = "/DetalhesUsuario/:id" component={DetalhesUsuario} />
            <Route path = "/CriarUsuario/" component={CriarUsuario} />
            <Route path = "/DeletarUsuario/:id" component={DeletarUsuario} />
            <Route path = "/EditarUsuario/:id" component={EditarUsuario} />

            <Route exact path = "/Horario" component={MainHorario} />
            <Route path = "/DetalhesHorario/:id" component={DetalhesHorario} />
            <Route path = "/CriarHorario/" component={CriarHorario} />
            <Route path = "/DeletarHorario/:id" component={DeletarHorario} />
            <Route path = "/EditarHorario/:id" component={EditarHorario} />

            <Route exact path = "/TipoJogo" component={MainTipoJogo} />
            <Route path = "/DetalhesTipoJogo/:id" component={DetalhesTipoJogo} />
            <Route path = "/CriarTipoJogo/" component={CriarTipoJogo} />
            <Route path = "/DeletarTipoJogo/:id" component={DeletarTipoJogo} />
            <Route path = "/EditarTipoJogo/:id" component={EditarTipoJogo} />
        </Switch>
    </BrowserRouter>
)

export default Routes;