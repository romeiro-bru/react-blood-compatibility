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
    <footer className="flex justify-center">
      <div>
        <span className="donate-blood">Quer ser um doador? </span>
        <a className="link-donate" href="https://www.gov.br/saude/pt-br/composicao/saes/sangue" target="_blank" rel="noopener noreferrer">
          Saiba mais
        </a>
      </div>
      <div>
        <a tabIndex="0" href="https://github.com/romeiro-bru/react-blood-compatibility" rel="noopener noreferrer">
          <img className="github" src={github} alt="github" />
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
