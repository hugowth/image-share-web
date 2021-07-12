import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout";
import Gallery from "./gallery";
import Login from "./login";
import PrivateRoute from "../components/PrivateRoute";

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/gallery" component={Gallery} />
      <Login path="/app/login" />
    </Router>
  </Layout>
);
export default App;
