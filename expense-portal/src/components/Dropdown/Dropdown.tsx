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
  // const options = Option;
  // const [ selectedValue, setSelectedValue ] = useState<string | null>(null);
  // const selectedOption = options.find(option => option.value === selectedValue);


  return (
    <div className="dropdown">
      <button type="button" onClick={() => setIsOpen(prev => !prev)}>
        {value ? value.label : placeholder}
      </button>
        { isOpen && (
          <ul>
            { options.map(option => (
              <li onClick={() => {onSelect(option); setIsOpen(false)}}>{option.label}</li>
            ))}
          </ul>
        )}
    </div>
  )
}