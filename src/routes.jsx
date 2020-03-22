import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import App from "./App";

const routes = (
  <BrowserRouter>
    <Route path="/" component={App} />
    {/* <Route path="/users" component={App} />
    <Route path="/contact" component={App} />
    <Route exact path="/settings" component={App} />
    <Route exact path="/settings/api" component={App} />
    <Route exact path="/settings/node" component={App} />
    <Route exact path="/settings/scraping" component={App} />
    <Route exact path="/settings/sharing" component={App} /> */}
  </BrowserRouter>
);

export default routes;
