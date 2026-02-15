const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();


function getMonthDays() {
  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  return {daysInMonth, firstDayOfWeek}
}

export function buidCalendar(year, month) {
  const calendar = [];
  const { daysInMonth, firstDayOfWeek } = getMonthDays(year, month);

  for (let i = 0; i < 42; i++) {
    const dayNumber = i - firstDayOfWeek + 1;
    if (dayNumber < 1 || dayNumber > daysInMonth) {
      calendar.push(null)
    } else {
      calendar.push(dayNumber)
    }
  }
  return calendar;
}