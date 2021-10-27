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
const Button = () => {
  return (
    <p>
      Quer ser um doador?
      <a href="https://www.gov.br/saude/pt-br/composicao/saes/sangue" target="_blank" rel="noopener noreferrer">
        <button>Saiba mais</button>
      </a>
    </p>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Blood Compatibility</h1>
      <Select />
      <Icon />
      <Button />
    </div>
  );
}

export default App;
