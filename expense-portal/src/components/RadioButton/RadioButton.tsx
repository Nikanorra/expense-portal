import './RadioButton.scss'

export default function RadioButton() {
  return (
    <fieldset className='claim__type'>
      <label htmlFor="">
        <input type="radio" name="claim" value="Expenses" checked/>
        <span>Expenses</span>
      </label>
      <label htmlFor="">
        <input type="radio" name="claim" value="Income"/>
        <span>Income</span>
      </label>
    </fieldset>
  )
}