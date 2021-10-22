import { useState } from "react";
import './style.css';
import fruitDrop from '../../assets/images/fruit-drop.png';

export function Select() {
  const [result, setResult] = useState("")
  const [donorSelected, setDonorSelected] = useState('O')
  const [receptorSelected, setReceptorSelected] = useState('O')
  const [rhFactor, setRhFactor] = useState('+')

  const handleSelectDonor = (e) => {
    setDonorSelected(e.target.value)
  }
  const handleSelectReceptor = (e) => {
    setReceptorSelected(e.target.value)
  }
  const handleRhFactor = (e) => {
    setRhFactor(e.target.value)
  }

  const handleResult = () => {
    if (donorSelected === "O" && rhFactor === "+") {
      if ((receptorSelected === "O" && rhFactor === "+") ||
        (receptorSelected === "A" && rhFactor === "+") ||
        (receptorSelected === "B" && rhFactor === "+") ||
        (receptorSelected === "AB" && rhFactor === "+")) {
        setResult(`O tipo O+ é compatível com o tipo ${receptorSelected}${rhFactor}`)
      }
    } else if (donorSelected === "A") {
      if (receptorSelected === "A" || receptorSelected === "AB") {
        setResult(`O tipo A é compatível com ${receptorSelected}`)
      } else {
        setResult(`O tipo A não é compatível com ${receptorSelected}`)
      }
    } else if (donorSelected === "B") {
      if (receptorSelected === "B" || receptorSelected === "AB") {
        setResult(`O tipo B é compatível com ${receptorSelected}`)
      } else {
        setResult(`O tipo B não é compatível com ${receptorSelected}`)
      }
    } else {
      if (receptorSelected === "AB") {
        setResult("AB é compatível com AB")
      } else {
        setResult(`O tipo AB não é compatível com ${receptorSelected}`)
      }
    }
  }

  return (
    <>
      <section>
        <div className="donor-options">
          <label htmlFor="donor-options">
            Tipo sanguíneo doador
        </label>
          <select value={donorSelected} onClick={handleResult} onChange={handleSelectDonor} name="donor">
            <option value="O">O</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
          </select>

          <label htmlFor="rh">Rh</label>
          <select value={rhFactor} onChange={handleRhFactor} name="rh">
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
        </div>

        <div className="receptor-options">
          <label htmlFor="receptor-options">Tipo sanguíneo receptor</label>
          <select value={receptorSelected} onClick={handleResult} onChange={handleSelectReceptor} name="receptor">
            <option value="O">O</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
          </select>

          <label htmlFor="rh">Rh</label>
          <select value={rhFactor} onClick={handleResult} onChange={handleRhFactor} name="rh">
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
        </div>
      </section>

      <section className="result">
        {result}
      </section>
    </>
  )
}