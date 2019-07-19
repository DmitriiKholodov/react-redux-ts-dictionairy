import React from 'react';
import './App.css';
import store from "../../store";
import {changeTitle} from "../../actions/actions"
import {connect}  from "react-redux";
// import {getAuthToken} from "../../requests";
import MainLayout from '../MainLayout';

interface IAppProps {
  test: boolean
}

const firstDispatch: any = () => {
  store.dispatch(changeTitle({title: 'test'}))
};

const App: React.FC<IAppProps> = ( props ) => {

  return (
    <div style={{padding: '20px', display: 'flex', flexFlow: 'column', justifyContent: 'space-between'}} className="App">
      <MainLayout />
    </div>
  );
};

const mapStateToProps = (state: object) => {
  return state;
};

export default connect(mapStateToProps)(App);
