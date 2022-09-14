import logo from './logo.svg';
import Snake from 'snake-game-react';

function App() {
  return (
    <div className="App">
      <div style={heading}>SNAKE GAME</div>
      <Snake
        color1="orange"
        color2="red"
        backgroundColor="lightblue"
      />
    </div>
  );
}

const heading = {
  textAlign: 'center',
  fontSize: 90,
}

export default App;
