import { useState } from "react";
import './style.css';
import fruitDrop from '../../assets/images/fruit-drop.png';

const bloodType = [
  { type: "O" },
  { type: "A" },
  { type: "B" },
  { type: "AB" }
]

export function Select() {
  const [result, setResult] = useState("")
  const [donorType, setDonorType] = useState('O')
  const [recipientType, setRecipientType] = useState('O')
  const [rhDonor, setRhDonor] = useState('+')
  const [rhRecipient, setRhRecipient] = useState('+')

  const bloodTypes = {
    donor: {
      rh: "",
      bloodType: ""
    },
    recipient: {
      rh: "",
      bloodType: ""
    }
  }

  const handleSelectDonor = (e) => {
    setDonorType(e.target.value)
  }
  const handleSelectRecipient = (e) => {
    setRecipientType(e.target.value)
  }
  const handleRhDonor = (e) => {
    setRhDonor(e.target.value)
  }
  const handleRhRecipient = (e) => {
    console.log(e.target.name, e.target.value)
    setRhRecipient(e.target.value)
  }

  // function isCompatible() {
  //   (rhDonor === "+" && rhRecipient === "-")
  // }

  // function message() {
  //   boo ? setResult(`O tipo ${donorType}${rhDonor} pode doar para ${recipientType}${rhRecipient}`) :
  //     setResult(`O tipo ${donorType}${rhDonor} não pode doar para ${recipientType}${rhRecipient}`)
  // }


  const handleResult = () => {
    if (rhDonor === "+" && rhRecipient === "-") {
      return setResult(`O tipo ${donorType}${rhDonor} não pode doar para ${recipientType}${rhRecipient}`)
    } else {
      if (donorType === "O") {
        if (recipientType === "O" || recipientType === "A" || recipientType === "B" || recipientType === "AB") {
          return setResult(`O tipo ${donorType}${rhDonor} pode doar para ${recipientType}${rhRecipient}`)
        }
      } else if (donorType === "A") {
        if (recipientType === "A" || recipientType === "AB") {
          return setResult(`O tipo ${donorType}${rhDonor} pode doar para ${recipientType}${rhRecipient}`)
        } else {
          setResult(`O tipo ${donorType}${rhDonor} não pode doar para ${recipientType}${rhRecipient}`)
        }
      } else if (donorType === "B") {
        if (recipientType === "B" || recipientType === "AB") {
          setResult(`O tipo ${donorType}${rhDonor} pode doar para ${recipientType}${rhRecipient}`)
        } else {
          setResult(`O tipo ${donorType}${rhDonor} não pode doar para ${recipientType}${rhRecipient}`)
        }
      } else if (donorType === "AB") {
        if (recipientType === "AB") {
          setResult(`O tipo AB${rhDonor} pode doar para ${recipientType}${rhRecipient}`)
        } else {
          setResult(`O tipo AB${rhDonor} não pode doar para ${recipientType}${rhRecipient}`)
        }
      }
    }
  }

  return (
    <main>
      <form>
        <div className="donor-options">
          <label>
            Tipo sanguíneo doador
        </label>
          <select value={donorType} onClick={handleResult} onChange={handleSelectDonor} name="donor">
            {bloodType.map((item, i) => (
              <option key={i} value={item.type}>{item.type}</option>
            ))}
          </select>

          <label>Rh</label>
          <select value={rhDonor} onClick={handleResult} onChange={handleRhDonor} name="rh-donor">
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
        </div>

        <div className="recipient-options">
          <label>Tipo sanguíneo receptor</label>
          <select value={recipientType} onClick={handleResult} onChange={handleSelectRecipient} name="receptor">
            {bloodType.map((item, i) => (
              <option key={i} value={item.type}>{item.type}</option>
            ))}
          </select>

          <label>Rh</label>
          <select value={rhRecipient} onClick={handleResult} onChange={handleRhRecipient} name="rh-receptor">
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