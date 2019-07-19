import React from "react";
import Translator from '../Translator'
import ResultList from '../ResultList'
import './index.css'
import Dictionairy from "../Dictionairy";

interface IMainPageProps {

}

const MainPage: React.FC<IMainPageProps> = (props) => {
  return (
    <div className="main-page-wrapper">
      <Translator />
      <Dictionairy />
    </div>
  );
};

export default MainPage;