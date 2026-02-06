import './RadioButton.scss'

export type CurrencyType = {
  label: string;
  value: string;
}

type Props = {
  name: string;
  value: string;
  options: CurrencyType[];
  onChange: (value: string) => void;
}

export default function RadioButton({name, value, options = [], onChange}: Props) {
  return (
    <fieldset className='claim__type'>
      {
        options.map(option => (
        <label key={option.value}>
        <input type="radio" name={name} value={option.value} checked={value === option.value} onChange={() => onChange(option.value)}/>
        <span>{option.value}</span>
      </label>
      ))
      }
    </fieldset>
  )
}