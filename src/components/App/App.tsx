import React from 'react';
import './App.css';
import store from "../../store";
import {changeTitle} from "../../actions/actions"
import {connect}  from "react-redux";

interface IAppProps {
  test: boolean
}

const firstDispatch: any = () => {
  store.dispatch(changeTitle({title: 'test'}))
};

const App: React.FC<IAppProps> = ( props ) => {
  return (
    <div className="App">
          <h1 onClick={()=>firstDispatch()}>click for dispatch -> {store.getState().title}</h1>
    </div>
  );
};

const mapStateToProps = (state: object) => {
  return state;
};

export default connect(mapStateToProps)(App);
