import {buidCalendar} from '../../utilities/calendar/buidCalendar.utilitie'


export default function Calendar(){
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const days = buidCalendar(year, month);

  return (
    <div>
      <p>calendar</p>
      <p>Year: {year}</p>
      <p>Month: {month}</p>

      <div>
        {days.map((day, index) => (
          <p key={index}>{day}</p>
        ))}
      </div>
      {/* <p>Days in current month: {daysInMonth}</p>
      <p>First day in the week: {firstDayOfWeek}</p>
      <p>Current year: {year}</p> */}


    </div>
  )
}


