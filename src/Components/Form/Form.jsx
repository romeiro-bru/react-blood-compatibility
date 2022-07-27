import { useState } from "react";
import { Compatibility } from '../Compatibility/Compatibility';
import './style.css';

const allBloodTypes = [{ type: "O" }, { type: "A" }, { type: "B" }, { type: "AB" }]

export function Form() {
  const [donor, setDonor] = useState({ type: 'O', rh: '+' })
  const [recipient, setRecipient] = useState({ type: 'O', rh: '+' })

  return (
    <main>
      <form>
        <div className="donor-options">
          <label>
            Tipo sanguíneo do doador
          <select value={donor.type} onChange={(e) => setDonor({ ...donor, type: e.target.value })} name="donor">
              {allBloodTypes.map((item, i) => (
                <option key={i} value={item.type}>{item.type}</option>
              ))}
            </select>
          </label>

          <label>
            Rh
          <select value={donor.rh} onChange={(e) => setDonor({ ...donor, rh: e.target.value })} name="rh-donor">
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
          </label>
        </div>

        <div className="recipient-options">
          <label>
            Tipo sanguíneo do receptor
          <select value={recipient.type} onChange={(e) => setRecipient({ ...recipient, type: e.target.value })} name="recipient">
              {allBloodTypes.map((item, i) => (
                <option key={i} value={item.type}>{item.type}</option>
              ))}
            </select>
          </label>

          <label>
            Rh
          <select value={recipient.rh} onChange={(e) => setRecipient({ ...recipient, rh: e.target.value })} name="rh-recipient">
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
          </label>
        </div>
      </form>
      <Compatibility donor={donor} recipient={recipient} />
    </main>
  )
}