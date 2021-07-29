import Header from "components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "components/Home";
import Footer from "components/Footer";
import Menus from "components/Menus";
import Basket from "components/Basket";

const Wrapper = () => {
  return (
    <Router>
      <Header />
      <Basket />
      <Switch>
        <Route component={Home} path={["/", "/home"]} exact></Route>
        <Route component={Menus} path={"/menus/:menu"} exact></Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default Wrapper;
