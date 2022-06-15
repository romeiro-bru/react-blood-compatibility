import './App.css';
import { Form } from './Components/Form/Form';
import { ToggleButton } from './Components/ToggleButton/ToggleButton';
import github from './assets/images/github.png';

const Header = () => {
  return (
    <header>
      <h1>Blood Compatibility</h1>
      <ToggleButton />
    </header>
  )
}
const Footer = () => {
  return (
    <footer>
      <p>
        Quer ser um doador?
        <button>
          <a href="https://www.gov.br/saude/pt-br/composicao/saes/sangue" target="_blank" rel="noopener noreferrer">
            Saiba mais
        </a>
        </button>
      </p>
      <div>
        <a href="https://github.com/romeiro-bru/react-blood-compatibility" target="_blank" rel="noopener noreferrer">
          <img className="github" src={github} alt="icon" />
        </a>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
