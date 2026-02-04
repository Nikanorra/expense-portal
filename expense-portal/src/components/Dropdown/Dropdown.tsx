import { useState } from "react";
import { currencies } from '../../../src/constants/data/currencies'

export default function Dropdown() {
  const [open, isOpen] = useState(true);
  // const options = ['1', '2'];
  return (
    <div>
      <button>click</button>
      { open && (
        <ul>
        { currencies.map(currency => (
          <li>{currency.value}</li>
        ))
          }
        </ul>
      )
    }
    </div>
  )
}