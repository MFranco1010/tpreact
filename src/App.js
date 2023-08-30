import './App.css';
import { Nav } from './components/Nav';
import { Cont } from './components/Cont';
import { Foot } from './components/Foot';

function App() {
  return (
    <div className="App">
        <Nav />
        <Cont />
        <Foot img="/public/git.png" />
    </div>
  );
}

export default App;
