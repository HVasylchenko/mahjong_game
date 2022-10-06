import "./App.css";
import RandomArr from "./components/RandomArr";

function App() {
  
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

  const array = getRandomArr(1, 60, 32);

  return (
    <div className="App">
      <h1 className="title">Mahjong</h1>
        <RandomArr array={array} />
    </div>
  );
}

export default App;
