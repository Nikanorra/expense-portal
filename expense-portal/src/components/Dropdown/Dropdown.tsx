import { useState } from "react";
import { currencies } from '../../../src/constants/data/currencies'

import './Dropdown.scss'


type Option = {
  label: string;
  value: string | Option[]
}

type Dropdown = {
  options: Option[],
  value: Option | null,
  placeholder?: string,
  onSelect: (option: Option) => void
}


export default function Dropdown({
  options,
  value,
  placeholder = "choose",
  onSelect
}: Dropdown) {


  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div className={`dropdown ${isOpen ? `open` : ``}`}>
      <button type="button" onClick={() => setIsOpen(prev => !prev)}>
        {value ? value.label : placeholder}
      </button>
          <ul>
            { options.map(option => (
              <li onClick={() => {onSelect(option); setIsOpen(false)}}>{option.label}</li>
            ))}
          </ul>
    </div>
  )
}