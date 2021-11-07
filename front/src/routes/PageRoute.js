import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import DownloadPage from '../pages/DownloadPage';
import HelpPage from '../pages/HelpPage';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import QnaPage from '../pages/QnaPage';
import RegisterPage from '../pages/RegisterPage';

const PageRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/download" component={DownloadPage} />
      <Route exact path="/help" component={HelpPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/logout" component={LogoutPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/qna" component={QnaPage} />
    </Switch>
  );
};

export default PageRoute;
