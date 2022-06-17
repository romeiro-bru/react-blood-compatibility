import { useState } from "react";
import { Compatibility } from '../Compatibility/Compatibility';
import './style.css';

const allBloodTypes = [{ type: "O" }, { type: "A" }, { type: "B" }, { type: "AB" }]

export function Form() {
  const [donorType, setDonorType] = useState('O')
  const [recipientType, setRecipientType] = useState('O')
  const [rhDonor, setRhDonor] = useState('+')
  const [rhRecipient, setRhRecipient] = useState('+')

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
            Tipo sanguíneo do doador
          <select value={donorType} onChange={handleChange} name="donor">
              {allBloodTypes.map((item, i) => (
                <option key={i} value={item.type}>{item.type}</option>
              ))}
            </select>
          </label>

          <label>
            Rh
          <select value={rhDonor} onChange={handleChange} name="rh-donor">
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
          </label>
        </div>

        <div className="recipient-options">
          <label>
            Tipo sanguíneo do receptor
          <select value={recipientType} onChange={handleChange} name="recipient">
              {allBloodTypes.map((item, i) => (
                <option key={i} value={item.type}>{item.type}</option>
              ))}
            </select>
          </label>

          <label>
            Rh
          <select value={rhRecipient} onChange={handleChange} name="rh-recipient">
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
          </label>
        </div>
      </form>

      <Compatibility donorType={donorType} rhDonor={rhDonor} recipientType={recipientType} rhRecipient={rhRecipient} />
    </main>
  )
}