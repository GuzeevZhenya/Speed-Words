import React, { useState,useEffect,useRef } from 'react';
import { Welcome } from './components/steps/Welcome';
import { Game } from './components/steps/Game';
import { Result } from './components/steps/Result';

function App() {
  const [step, setStep] = useState('welcome');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const timerRef = useRef();

 
  const onStart = () => {
    setStep('game');
  };

  //Таймер
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        const newValue = prev - 1;
        if (newValue=== 0){
          setStep('finish')
        }
        return newValue;
      })
    
    }, 1000);
    return () => {
      clearInterval(timerRef.current); //Скидываем таймер
    }
  }, []);
  

  useEffect(() => {
    if (currentIndex === 5) {
      clearInterval(timerRef.current); //Скидываем таймер
      setStep('result');
    }
    if (!timeLeft) {
      clearInterval(timerRef.current);
    }
  },[currentIndex,timeLeft])


  return (
    <div>
      <div className="wrapper">
        {step === 'welcome' && <Welcome onClickStart={onStart} />}
        {step === 'game' && (
          <Game
            currentIndex={currentIndex}
            onNextWord={() => setCurrentIndex((prev) => prev + 1)}
            onFinish={() => setStep('result')}
            timeLeft={timeLeft}
          />
        )}
        {step === 'result' && <Result wordsCount={currentIndex} timeLeft={timeLeft} onRestart={() => setStep('game')} />}
      </div>
    </div>
  );
}

export default App;
