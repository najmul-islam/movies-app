import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SingleMovie from "./pages/SingleMovie";
import Blog from "./pages/Blog";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import NotFound from "./pages/NotFound";
import Header from "./components/header";
import Footer from "./components/Footer";

import { AppProvider } from "./lib/MoviesContext";

function App() {
  return (
    <AppProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={SingleMovie} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/tarms-condition" component={TermsCondition} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </AppProvider>
  );
}

export default App;
