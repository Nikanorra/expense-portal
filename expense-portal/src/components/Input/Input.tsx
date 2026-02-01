type  InputProps = {
  id: string,
  label?: string,
  value: string | number,
  onChange: (value: string) => void,
  placeholder?: string,
  type?: string,
}


export default function Input({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}:InputProps ) {
  return (
    <div>
    {label && <label htmlFor={id}>{label}</label>}
    <input
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
    </div>
  )
}