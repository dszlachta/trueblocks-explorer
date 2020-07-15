import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { setup as setupWebsocket } from 'websockets';
import App from './App';
import { Setup } from './pages/Setup/Setup.jsx';
import 'index.css';

setupWebsocket();

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/setup" exact component={Setup} />
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
);
export default routes;

ReactDOM.render(routes, document.getElementById('root'));
