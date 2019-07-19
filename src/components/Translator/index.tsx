import React from "react";
import './index.css'
import Select from 'react-select';

interface ITranslatorProps {

}

const Translator: React.FC<ITranslatorProps> = (props) => {
  return (
    <div style={{display: "flex", flexFlow: "column", width: "50%", marginRight: '20px'}}>
    <div className="translator-window">
      Переводчик
      <div className="to-translate">
        <Select placeholder="Выберите язык" />
        <textarea className="translate-area" placeholder="Введите слово"></textarea>
      </div>
      <div className="start-button">
        Перевести
      </div>
      <div className="from-translate">
        <Select placeholder="Выберите язык" />
        <textarea className="translate-area" placeholder="Перевод"></textarea>
      </div>
    </div>
    <div className="translator-window">
      Варианты
    </div>
    </div>
  );
};

export default Translator;