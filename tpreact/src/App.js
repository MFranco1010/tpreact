import './App.css';
import { Nav } from './components/Nav';
import { Foot } from './components/Foot';
import { Cont } from './components/Cont';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div>
        <Cont />
      </div>
    </div>
  );
}

export default App;
