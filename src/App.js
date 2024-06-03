import "./App.css";
import MyRGBPanel from "./components/rgb-panel/MyRGBPanel";
import MySlider from "./components/rgb-panel/MySlider";
import MyCalculator from "./components/calculator/MyCalculator";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";

function App() {
  return (
    <div className="App">
      <header className="管浩任5B0G0019">
        <h1>My Application</h1>
      </header>
      <div className="App-grid">
        <div className="App-grid-item">
          <h2>MySlider</h2>
          <MySlider />
        </div>
        <div className="App-grid-item">
          <h2>MyRGBPanel</h2>
          <MyRGBPanel />
        </div>
        <div className="App-grid-item">
          <h2>MyCalculator</h2>
          <MyCalculator />
        </div>
        <div className="App-grid-item">
          <h2>Tic-Tac-Toe Game</h2>
          <TicTacToe />
        </div>
      </div>
    </div>
  );
}

export default App;
