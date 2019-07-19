import * as React from 'react';
import { Router, Route } from 'react-router-dom';
import AuthPage from '../AuthPage';
import { createBrowserHistory } from 'history';
import MainPage from '../MainPage';

interface IMainLayoutProps {

}

const history = createBrowserHistory();

const MainLayout: React.FC<IMainLayoutProps> = (props) => {
  return(
      <Router history={history}>
        <Route exact={true} path="/" component={AuthPage} />
        <Route exact={true} path="/main" component={MainPage} />
      </Router>
  )
};

export default MainLayout;