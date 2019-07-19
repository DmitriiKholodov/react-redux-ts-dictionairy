import React from "react";
import './index.css'
import Select from 'react-select';

interface IDictionairyProps {

}

const Dictionairy: React.FC<IDictionairyProps> = (props) => {
  return (
    <div className="translator-window">
      Ваш словарь
    </div>
  );
};

export default Dictionairy;