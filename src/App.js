import './App.css';
import { Select } from './Components/Select/Select';
import github from './assets/images/github.png';

const Icon = () => {
  return (
    <a href="https://github.com/romeiro-bru/typescript-ghibli-movies" target="_blank" rel="noopener noreferrer">
      <img className="github" src={github} alt="icon" />
    </a>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Blood Compatibility</h1>
      <Select />
      <Icon />
    </div>
  );
}

export default App;
