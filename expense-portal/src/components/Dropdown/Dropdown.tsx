import { useState } from "react";
import { currencies } from '../../../src/constants/data/currencies'

import './Dropdown.scss'

export default function Dropdown() {

  const [ isOpen, setIsOpen ] = useState(false);
  const options = currencies;
  const [ selectedValue, setSelectedValue ] = useState<string | null>(null);
  const selectedOption = options.find(option => option.value === selectedValue);


  return (
    <div className="dropdown">
      <button type="button" onClick={() => setIsOpen(prev => !prev)}>
        {selectedOption ? selectedOption.value : 'choose'}
      </button>
        { isOpen && (
          <ul>
            { options.map(option => (
              <li onClick={() => {setSelectedValue(option.value); setIsOpen(false)}}>{option.value}</li>
            ))}
          </ul>
        )}
    </div>
  )
}