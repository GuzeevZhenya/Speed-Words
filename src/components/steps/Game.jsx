import React, { useState,useEffect,useRef } from 'react';

import styles from './Steps.module.scss';

const arr = [
  'Привет как твои дела сегодня',
  'С утра я пошел на прогулку',
  'А вечером объелся мороженным и лег спать',
];

const wordsArr = arr[Math.floor(Math.random()*arr.length)].split(' '); //Массив из предложения

export const Game = ({onFinish,currentIndex,setCurrentIndex,onNextWord,timeLeft}) => {

  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);
  const currentWord = wordsArr[currentIndex];

  const onChangeInput = (event) => {
    const { value } = event.target;
  
    if (value === currentWord) {
      setInputValue('');
      onNextWord();
      setIsError(false)
      return;
    }
    if (value !== currentWord) {
      setIsError(true);
    }
    if (!value) {
      setIsError(false)
    }
    setInputValue(value);
  };

  return (
    <div>
      <p className={styles.subTitle}>Введите слово:</p>
      <h2 className={styles.wordTitle}>{currentWord}</h2>
      <input
        onChange={onChangeInput}
        value={inputValue}
        className={styles.inputWord + ' ' + (isError ? styles.error : '')}
        placeholder="Введите слово"
        type="text"
      />
      <div className={styles.statistics}>
        <div>
          <p>Осталось времени:</p>
          <b>{timeLeft} сек</b>
        </div>
        <div>
          <p>Введено слов:</p>
          <b>{currentIndex}</b>
        </div>
      </div>
    </div>
  );
};

export default Game;
