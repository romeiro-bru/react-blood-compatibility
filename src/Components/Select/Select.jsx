import { useState, useReducer, useEffect, useCallback } from "react";
import './style.css';
import happy from '../../assets/images/happy.png';
import happy2 from '../../assets/images/happy2.png';
import happy3 from '../../assets/images/happy3.png';
import happy4 from '../../assets/images/happy4.png';
import sad from '../../assets/images/sad-drop.png';
import sad2 from '../../assets/images/sad-drop2.png';
import sad3 from '../../assets/images/sad-drop3.png';

const allBloodTypes = [{ type: "O" }, { type: "A" }, { type: "B" }, { type: "AB" }]
const imgCompatible = [happy, happy2, happy3, happy4]
const imgNotCompatible = [sad, sad2, sad3]

// const reducer = (state, action) => {
//   setMessage:
//   (message) =>
//     (state) => ({ message: state.message })
// }

export function Select() {
  const [result, setResult] = useState("")
  const [donorType, setDonorType] = useState('O')
  const [recipientType, setRecipientType] = useState('O')
  const [rhDonor, setRhDonor] = useState('+')
  const [rhRecipient, setRhRecipient] = useState('+')
  const [isCompatible, setIsCompatible] = useState(true)

  // const [state, dispatcher] = useReducer({ reducer, message: '' })
  // console.log(state)
  // const [state, dispatcher] = useReducer(
  //   {donor: { rh: "+", bloodType: "O" },
  //    recipient: { rh: "+", bloodType: "O" }
  //   }, reducer)
  // dispatcher.setResult()
  // state.result

  const randomImg = () => {
    return isCompatible === true ? imgCompatible[Math.floor(Math.random() * imgCompatible.length)] :
      imgNotCompatible[Math.floor(Math.random() * imgNotCompatible.length)]
  }

  const message = useCallback(() => {
    return isCompatible === true ? setResult(`O tipo ${donorType}${rhDonor} pode doar para ${recipientType}${rhRecipient}`) :
      setResult(`O tipo ${donorType}${rhDonor} não pode doar para ${recipientType}${rhRecipient}`)
  })

  useEffect(() => {
    message()
    if (rhDonor === "+" && rhRecipient === "-") {
      setIsCompatible(false)
    } else {
      if (donorType === "O") {
        if (recipientType === "O" || recipientType === "A" || recipientType === "B" || recipientType === "AB") {
          return setIsCompatible(true)
        }
      } else if (donorType === "A") {
        if (recipientType === "A" || recipientType === "AB") {
          return setIsCompatible(true)
        } else if (recipientType === "O" || recipientType === "B") {
          return setIsCompatible(false)
        }
      } else if (donorType === "B") {
        if (recipientType === "B" || recipientType === "AB") {
          return setIsCompatible(true)
        } else if (recipientType === "O" || recipientType === "A") {
          return setIsCompatible(false)
        }
      } else if (donorType === "AB") {
        if (recipientType === "AB") {
          return setIsCompatible(true)
        } else {
          return setIsCompatible(false)
        }
      }
    }
  }, [donorType, rhDonor, recipientType, rhRecipient, message])


  const handleChange = (e) => {
    if (e.target.name === "rh-donor") { setRhDonor(e.target.value) }
    if (e.target.name === "rh-recipient") { setRhRecipient(e.target.value) }
    if (e.target.name === "donor") { setDonorType(e.target.value) }
    if (e.target.name === "recipient") { setRecipientType(e.target.value) }
  }

  return (
    <main>
      <form>
        <div className="donor-options">
          <label>
            Tipo sanguíneo doador
        </label>
          <select value={donorType} onChange={handleChange} name="donor">
            {allBloodTypes.map((item, i) => (
              <option key={i} value={item.type}>{item.type}</option>
            ))}
          </select>

          <label>Rh</label>
          <select value={rhDonor} onChange={handleChange} name="rh-donor">
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
        </div>

        <div className="recipient-options">
          <label>Tipo sanguíneo receptor</label>
          <select value={recipientType} onChange={handleChange} name="recipient">
            {allBloodTypes.map((item, i) => (
              <option key={i} value={item.type}>{item.type}</option>
            ))}
          </select>

          <label>Rh</label>
          <select value={rhRecipient} onChange={handleChange} name="rh-recipient">
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
        </div>
      </form>

      <section className="result">
        {result}
        <img src={randomImg()} alt="blood-drop" />
      </section>
    </main>
  )
}