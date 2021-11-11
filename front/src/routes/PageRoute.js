import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import DownloadPage from '../pages/DownloadPage';
import HelpPage from '../pages/HelpPage';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import FaqPage from '../pages/FaqPage';
import RegisterPage from '../pages/RegisterPage';
import TermsPage from '../pages/TermsPage';
import CpEditPage from '../pages/CpEditPage';
import TemplatePage from '../pages/TemplatePage';

const PageRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/download" component={DownloadPage} />
      <Route exact path="/help" component={HelpPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/logout" component={LogoutPage} />
      <Route exact path="/register/terms" component={TermsPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/faq" component={FaqPage} />
      <Route exact path="/edit" component={CpEditPage} />
      <Route exact path="/template" component={TemplatePage} />
    </Switch>
  );
};

export default PageRoute;
