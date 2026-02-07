export default function Calendar(){

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMonth = new Date(year, month +1, 0).getDate()
  const firstDayOfWeek = new Date(year, month, 1).getDay()

  return (
    <div>
      <p>calendar</p>
      <p>Days in current month: {daysInMonth}</p>
      <p>First day in the week: {firstDayOfWeek}</p>
      <p>Current year: {year}</p>
    </div>
  )
}