import './App.css';
import { Select } from './Components/Select/Select';
import github from './assets/images/github.png';
import bloodDonation from './assets/images/blood-donation.png';

const Footer = () => {
  return (
    <footer>
      <p>
        Quer ser um doador?
        <a href="https://www.gov.br/saude/pt-br/composicao/saes/sangue" target="_blank" rel="noopener noreferrer">
          <button>Saiba mais</button>
        </a>
        <img src={bloodDonation} alt="blood-donation" />
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
      <h1>Blood Compatibility</h1>
      <Select />
      <Footer />
    </div>
  );
}

export default App;
