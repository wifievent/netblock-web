import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import NbDownloadPage from '../pages/NbDownloadPage';
import CpDownloadPage from '../pages/CpDownloadPage';
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
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/nbdownload" component={NbDownloadPage} />
      <Route exact path="/cpdownload" component={CpDownloadPage} />
      <Route exact path="/help" component={HelpPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/logout" component={LogoutPage} />
      <Route exact path="/register/terms" component={TermsPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/faq" component={FaqPage} />
    </Switch>
  );
};

export default PageRoute;
