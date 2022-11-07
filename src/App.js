import "./App.css";
import { useState } from "react";
import RandomArr from "./components/RandomArr";

function App() {
  const [isStart, setIsStart] = useState(false);

  function getRandomArr(min, max, lenght) {
    let arr = [];
    let number;
    while (arr.length < lenght / 2) {
      number = Math.floor(Math.random() * (max - min + 1) + min);
      if (arr.indexOf(number) === -1) {
        arr.push(number);
      }
    }
    return [...arr, ...arr].sort(() => Math.random() - 0.5);
  }

  const array = getRandomArr(1, 60, 9);

  return (
    <div className="App">
      <h1 className="title">Mahjong</h1>
      <h3>
        The objective of the game is to collect cards until no card is hidden.
        User picks a card and if its value matches the value of a previously
        selected card, both cards change state to “visible”. A card can have a
        value in (1,60) range and must be a prime number. (2, 3, 5, 7, 11, 13
        etc.) Two pairs with identical values are not allowed, they must be
        unique. Array of prime numbers must be generated dynamically.
      </h3>
      <button className="buttonStart" onClick={() => setIsStart(true)}>
        Start
      </button>
      {isStart && <RandomArr array={array} />}
    </div>
  );
}

export default App;
