import Header from "./Header";

import { useEffect, useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [userNumber, setUserNumber] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrongNumber, setIsWrongNumber] = useState(false);

  const createRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleCalculation = () => {
    setFirstNumber(createRandomNumber(1, 20));
    setSecondNumber(createRandomNumber(1, 20));
    setUserNumber("");
    setIsWrongNumber(false);
    setIsCorrect(false);
  };

  const handleCheck = () => {
    if (firstNumber + secondNumber === parseInt(userNumber)) {
      setIsWrongNumber(false);
      setIsCorrect(true);
    } else {
      setIsWrongNumber(true);
      setIsCorrect(false);
    }
  };

  useEffect(function () {
    handleCalculation();
  }, []);

  return (
    <>
      <Header />
      <div className="main">
        <span className="text calculation-text">
          {firstNumber} + {secondNumber} ={" "}
          {parseInt(userNumber) ? userNumber : "?"}
        </span>
        <span className={isCorrect ? "hidden" : "text"}>
          Please enter your calculated number:
        </span>
        <span className="hidden">Please enter a valid calculated number!</span>
        <span className={isCorrect ? "text correct-number-text" : "hidden"}>
          Is a correct answer!
        </span>
        <span className={isWrongNumber ? "text wrong-number-text" : "hidden"}>
          Is not a correct number!
        </span>
        <input
          disabled={isCorrect}
          className="input"
          type="number"
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
        />
        <button className="btn" onClick={handleCalculation}>
          <span className="material-symbols-outlined">rotate_left</span>
          Generate a new calculation
        </button>
        <button className={isCorrect ? "hidden" : "btn"} onClick={handleCheck}>
          <span className="material-symbols-outlined">
            playlist_add_check_circle
          </span>
          Check your answer
        </button>
      </div>
    </>
  );
}

export default App;
