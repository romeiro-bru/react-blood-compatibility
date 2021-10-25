import { useState } from "react";
import './style.css';
import happy from '../../assets/images/happy.png';
import happy2 from '../../assets/images/happy2.png';
import happy3 from '../../assets/images/happy3.png';
import happy4 from '../../assets/images/happy4.png';
import sad from '../../assets/images/sad-drop.png';
import sad2 from '../../assets/images/sad-drop2.png';
import sad3 from '../../assets/images/sad-drop3.png';

const allBloodTypes = [
  { type: "O" },
  { type: "A" },
  { type: "B" },
  { type: "AB" }
]
const imgCompatible = [happy, happy2, happy3, happy4]
const imgNotCompatible = [sad, sad2, sad3]

export function Select() {
  const [result, setResult] = useState("")
  const [donorType, setDonorType] = useState('O')
  const [recipientType, setRecipientType] = useState('O')
  const [rhDonor, setRhDonor] = useState('+')
  const [rhRecipient, setRhRecipient] = useState('+')

  const randCompatibleImg = imgCompatible[Math.floor(Math.random() * imgCompatible.length)];
  const randNotCompatibleImg = imgNotCompatible[Math.floor(Math.random() * imgNotCompatible.length)];

  // const bloodTypes = {
  //   donor: {
  //     rh: "+",
  //     bloodType: "O"
  //   },
  //   recipient: {
  //     rh: "+",
  //     bloodType: "O"
  //   }
  // }

  const handleSelectDonor = (e) => {
    setDonorType(e.target.value)
  }
  const handleSelectRecipient = (e) => {
    setRecipientType(e.target.value)
  }
  // const handleRhDonor = (e) => {
  //   setRhDonor(e.target.value)
  // }
  // const handleRhRecipient = (e) => {
  //   console.log(e.target.name, e.target.value)
  //   setRhRecipient(e.target.value)
  // }

  function isCompatible(e) {
    e.target.name === "rh-donor" ? setRhDonor(e.target.value) : setRhRecipient(e.target.value)

    return (e.target.name === "rh-recipient" && e.target.value === "+")
      && (e.target.name === "rh-donor" && e.target.value === "-")
    // return (rhDonor === "+" && rhRecipient === "-")
  }

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
          return setResult(`O tipo ${donorType}${rhDonor} pode doar para ${recipientType}${rhRecipient}`)
        } else {
          return setResult(`O tipo ${donorType}${rhDonor} não pode doar para ${recipientType}${rhRecipient}`)
        }
      } else if (donorType === "AB") {
        if (recipientType === "AB") {
          return setResult(`O tipo AB${rhDonor} pode doar para ${recipientType}${rhRecipient}`)
        } else {
          return setResult(`O tipo AB${rhDonor} não pode doar para ${recipientType}${rhRecipient}`)
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
            {allBloodTypes.map((item, i) => (
              <option key={i} value={item.type}>{item.type}</option>
            ))}
          </select>

          <label>Rh</label>
          <select value={rhDonor} onClick={handleResult} onChange={isCompatible} name="rh-donor">
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
        </div>

        <div className="recipient-options">
          <label>Tipo sanguíneo receptor</label>
          <select value={recipientType} onClick={handleResult} onChange={handleSelectRecipient} name="recipient">
            {allBloodTypes.map((item, i) => (
              <option key={i} value={item.type}>{item.type}</option>
            ))}
          </select>

          <label>Rh</label>
          <select value={rhRecipient} onClick={handleResult} onChange={isCompatible} name="rh-recipient">
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
        </div>
      </form>

      <section className="result">
        {result}
        <img hidden={true} src={randCompatibleImg} alt="blood-drop" />
        <img hidden={true} src={randNotCompatibleImg} alt="blood-drop" />
      </section>
    </main>
  )
}