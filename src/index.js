import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import { setup as setupWebsocket } from 'websockets';
import App from './App';
import 'index.css';

setupWebsocket();

const routes = (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
);
export default routes;

ReactDOM.render(routes, document.getElementById('root'));
