import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import App from "./App";

const routes = (
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route path="/users" component={App} />
    <Route path="/contact" component={App} />
    <Route path="/settings" component={App} />
  </BrowserRouter>
);

export default routes;
