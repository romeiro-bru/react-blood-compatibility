import { useState, useEffect, useCallback } from "react";
import './style.css';

import happy from '../../assets/images/happy.png';
import happy2 from '../../assets/images/happy2.png';
import happy3 from '../../assets/images/happy3.png';
import happy4 from '../../assets/images/happy4.png';
import sad from '../../assets/images/sad-drop.png';
import sad2 from '../../assets/images/sad-drop2.png';
import sad3 from '../../assets/images/sad-drop3.png';

const imgCompatible = [happy, happy2, happy3, happy4]
const imgNotCompatible = [sad, sad2, sad3]

export function Compatibility({ donor, recipient }) {
  const [result, setResult] = useState("")
  const [isCompatible, setIsCompatible] = useState(true)

  const randomImg = () => {
    return isCompatible === true ? imgCompatible[Math.floor(Math.random() * imgCompatible.length)] :
      imgNotCompatible[Math.floor(Math.random() * imgNotCompatible.length)]
  }
  const message = useCallback(() => {
    return isCompatible === true ? setResult(`O tipo ${donor.type}${donor.rh} pode doar para ${recipient.type}${recipient.rh}`) :
      setResult(`O tipo ${donor.type}${donor.rh} não pode doar para ${recipient.type}${recipient.rh}`)
  }, [isCompatible, donor, recipient])

  useEffect(() => {
    message()
    if (donor.rh === "+" && recipient.rh === "-") {
      return setIsCompatible(false)
    } else {
      if (donor.type === "O") {
        if (recipient.type === "O" || recipient.type === "A" || recipient.type === "B" || recipient.type === "AB") {
          return setIsCompatible(true)
        }
      } else if (donor.type === "A") {
        if (recipient.type === "A" || recipient.type === "AB") {
          return setIsCompatible(true)
        } else if (recipient.type === "O" || recipient.type === "B") {
          return setIsCompatible(false)
        }
      } else if (donor.type === "B") {
        if (recipient.type === "B" || recipient.type === "AB") {
          return setIsCompatible(true)
        } else if (recipient.type === "O" || recipient.type === "A") {
          return setIsCompatible(false)
        }
      } else if (donor.type === "AB") {
        if (recipient.type === "AB") {
          return setIsCompatible(true)
        } else if (recipient.type === "O" || recipient.type === "A" || recipient.type === "B") {
          return setIsCompatible(false)
        }
      }
    }
  }, [donor, recipient, message])


  return (
    <section className="compatibility">
      {result}
      <img src={randomImg()} alt="blood drop" />
    </section>
  )
}