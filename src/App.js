import Feelings from './components/Feelings'
import FavColor from './components/FavColor'
import Person from './components/Person'
import './App.css';

function App() {
  return (
    <div className="App">
      <Person handleNameChange/>
      <br />
      <Feelings name="Bora" />
      <br />
      <FavColor name="Bora" />
      <br />
    </div>
  )
}

export default App;
