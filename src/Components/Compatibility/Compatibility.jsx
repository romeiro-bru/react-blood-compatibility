import { useState, useEffect, useCallback } from "react";

import happy from '../../assets/images/happy.png';
import happy2 from '../../assets/images/happy2.png';
import happy3 from '../../assets/images/happy3.png';
import happy4 from '../../assets/images/happy4.png';
import sad from '../../assets/images/sad-drop.png';
import sad2 from '../../assets/images/sad-drop2.png';
import sad3 from '../../assets/images/sad-drop3.png';

const imgCompatible = [happy, happy2, happy3, happy4]
const imgNotCompatible = [sad, sad2, sad3]

export function Compatibility({ donorType, rhDonor, recipientType, rhRecipient }) {
  const [result, setResult] = useState("")
  const [isCompatible, setIsCompatible] = useState(true)

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
        } else if (recipientType === "O" || recipientType === "A" || recipientType === "B") {
          return setIsCompatible(false)
        }
      }
    }
  }, [donorType, rhDonor, recipientType, rhRecipient, message])


  return (
    <section className="result">
      {result}
      <img src={randomImg()} alt="blood-drop" />
    </section>
  )
}