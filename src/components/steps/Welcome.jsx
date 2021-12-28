import React from 'react';


export const Welcome = ({onClickStart}) => {
  return (
    <div>
       <img src="/images/flag.png" height={50} width={50}/>
        <h1>Speed Words</h1>
       <p>Игра на скорость ввода слов</p>
       <button className="button" onClick={onClickStart}> <img src="/images/flame.png"/>Начать</button>
    </div>
  );
}
