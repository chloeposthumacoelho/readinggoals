const calendar = document.querySelector('#app-calendar');

const isWeekend = (day) => {
  return day % 7 === 6 || day % 7 === 0;
}

const getDayName = (day) => {
  const date = new Date(Date.UTC(2018, 0, day));
  return new Intl.DateTimeFormat('en-Us', { weekday: 'short' }).format(date);
}

for (let day = 1;day <= 31;day++) {

  const weekend = isWeekend(day);

  let name = '';

  if (day <= 7) {
    const dayName = getDayName(day);
    name = `<div class='name'>${dayName}</div>`;
  }

  calendar.insertAdjacentHTML('beforeend', `<div class='day ${weekend ? 'weekend' : ''}'><div class='name'>${name}</div>${day}</div>`)
}

document.querySelectorAll('#app-calendar .day').forEach(day => {
  day.addEventListener('click', e => {
    e.currentTarget.classList.toggle('selected');
  })
})