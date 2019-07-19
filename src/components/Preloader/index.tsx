import React from "react";
import './index.css'

interface IAuthPageProps {

}

const Preloader: React.FC<IAuthPageProps> = (props) => {
  return (
    <div className="lds-circle">
      <div></div>
    </div>
  );
};

export default Preloader;