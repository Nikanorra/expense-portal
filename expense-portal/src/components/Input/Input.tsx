type  InputProps = {
  label?: string,
  value: string,
  onChange: (value: string) => void,
  placeholder: string,
  type?: string,
}


export default function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}:InputProps ) {
  return (
    <label>
    {label}
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
    </label>
  )
}