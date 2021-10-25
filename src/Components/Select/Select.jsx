import { useState } from "react";
import './style.css';
import fruitDrop from '../../assets/images/fruit-drop.png';

export function Select() {
  const [result, setResult] = useState("")
  const [donorType, setDonorType] = useState('O')
  const [receptorType, setReceptorType] = useState('O')
  const [rhDonor, setRhDonor] = useState('+')
  const [rhReceptor, setRhReceptor] = useState('+')

  const bloodTypes = {
    donor: {
      rh: "",
      bloodType: ""
    },
    receptor: {
      rh: "",
      bloodType: ""
    }
  }

  const handleSelectDonor = (e) => {
    setDonorType(e.target.value)
  }
  const handleSelectReceptor = (e) => {
    setReceptorType(e.target.value)
  }
  const handleRhDonor = (e) => {
    setRhDonor(e.target.value)
  }
  const handleRhReceptor = (e) => {
    console.log(e.target.name, e.target.value)
    setRhReceptor(e.target.value)
  }

  /*
  function isCompatible(object: obj): boolean{
    ** MAGIA ***
  }

  function message(boo: booleam): string{
    boo ? "Sucesso" : "Erro"
  }
  */


  const handleResult = () => {
    if (rhDonor === "+" && rhReceptor === "-") {
      return setResult(`O tipo ${donorType}${rhDonor} não pode doar para ${receptorType}${rhReceptor}`)
    } else {
      if (donorType === "O") {
        if (receptorType === "O" || receptorType === "A" || receptorType === "B" || receptorType === "AB") {
          return setResult(`O tipo ${donorType}${rhDonor} pode doar para ${receptorType}${rhReceptor}`)
        }
      } else if (donorType === "A") {
        if (receptorType === "A" || receptorType === "AB") {
          return setResult(`O tipo ${donorType}${rhDonor} pode doar para ${receptorType}${rhReceptor}`)
        } else {
          setResult(`O tipo ${donorType}${rhDonor} não pode doar para ${receptorType}${rhReceptor}`)
        }
      } else if (donorType === "B") {
        if (receptorType === "B" || receptorType === "AB") {
          setResult(`O tipo ${donorType}${rhDonor} pode doar para ${receptorType}${rhReceptor}`)
        } else {
          setResult(`O tipo ${donorType}${rhDonor} não pode doar para ${receptorType}${rhReceptor}`)
        }
      } else if (donorType === "AB") {
        if (receptorType === "AB") {
          setResult(`O tipo AB${rhDonor} pode doar para ${receptorType}${rhReceptor}`)
        } else {
          setResult(`O tipo AB${rhDonor} não pode doar para ${receptorType}${rhReceptor}`)
        }
      }
    }
  }

  return (
    <main>
      <form>
        <div className="donor-options">
          <label htmlFor="donor-options">
            Tipo sanguíneo doador
        </label>
          <select value={donorType} onClick={handleResult} onChange={handleSelectDonor} name="donor">
            <option value="O">O</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
          </select>

          <label htmlFor="rh-donor">Rh</label>
          <select value={rhDonor} onClick={handleResult} onChange={handleRhDonor} name="rh-donor">
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
        </div>

        <div className="receptor-options">
          <label htmlFor="receptor-options">Tipo sanguíneo receptor</label>
          <select value={receptorType} onClick={handleResult} onChange={handleSelectReceptor} name="receptor">
            <option value="O">O</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
          </select>

          <label htmlFor="rh-receptor">Rh</label>
          <select value={rhReceptor} onClick={handleResult} onChange={handleRhReceptor} name="rh-receptor">
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
        </div>
      </form>

      <section className="result">
        {result}
      </section>
    </main>
  )
}