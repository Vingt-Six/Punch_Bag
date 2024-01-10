import { useState } from 'react';
import './App.css';
import Bag from './Components/Bag/Bag'
import LifeBar from './Components/LifeBar/LifeBar'
import sac from './img/bag.png'
import sacUsé from './img/bag-burst.png'
import Btn from './Components/Button/Button'

function App() {

  const [life, setLife] = useState(100)

  let hit = () => {
    setLife(life - 10)
  }

  let restart = () => {
    setLife(100)
  }

  return (
    <div className="App">
      <Bag img={life <= 0 ? sacUsé : sac} />
      <LifeBar vie={life} />
      <Btn taper={life <= 0 ? restart : hit} content={life <= 0 ? "Restart" : "Punch"} />
    </div>
  );
}

export default App;
