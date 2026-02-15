
import {buidCalendar} from '../../utilities/calendar/buidCalendar.utilitie'
import './Calendar.scss'

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
const days = buidCalendar(year, month);

function isSameYMD(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}


export default function Calendar(){
  const monthName = today.toLocaleString('en-GB', {month: 'long'});

  return (
    <div>
      <p>Year: {year}</p>
      <p>Month name: {monthName}</p>

      <div className='calendar__days'>

        {days.map((day, index) => {
          if (day === null) {
            return (<p key={index}></p>)
          }

          const cellDay = new Date(year, month, day);
          const isToday = isSameYMD(cellDay, today);

          return (
            <p key={index} className={isToday ? 'day today' : 'day'}>{day}</p>
          )

        })}
      </div>
    </div>
  )
}


