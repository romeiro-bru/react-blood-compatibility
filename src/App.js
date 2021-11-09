import './App.css';
import { Select } from './Components/Select/Select';
import { ToggleButton } from './Components/ToggleButton/ToggleButton';
import bloodDonation from './assets/images/blood-donation.png';
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
        <a href="https://www.gov.br/saude/pt-br/composicao/saes/sangue" target="_blank" rel="noopener noreferrer">
          <button>Saiba mais</button>
        </a>
        <img className="blood-donation" src={bloodDonation} alt="blood-donation" />
      </p>
      <div>
        <a href="https://github.com/romeiro-bru/typescript-ghibli-movies" target="_blank" rel="noopener noreferrer">
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
      <Select />
      <Footer />
    </div>
  );
}

export default App;
