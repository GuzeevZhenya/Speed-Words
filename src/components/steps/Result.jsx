import React from 'react';

import styles from './Steps.module.scss';

export const Result = ({ onRestart, wordsCount, timeLeft }) => {
  return (
    <div className={styles.resultBlock}>
      <img width={64} height={64} src="/images/emoji-1.png" />
      <p>
        Неплохо! За <b>{10 - timeLeft}</b> секунды, ты ввел:
      </p>
      <h2>{wordsCount} слов</h2>
      <button onClick={onRestart} className="button">
        Попробовать снова?
      </button>
    </div>
  );
};
