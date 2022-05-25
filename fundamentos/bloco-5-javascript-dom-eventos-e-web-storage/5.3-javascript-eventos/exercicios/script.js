function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
  
    weekDaysList.appendChild(dayListItem);
  };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.
//Exercício 1
function createDezDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const daysListItem = document.createElement('li');
    daysListItem.innerHTML = day;
        
    if (day === 4 || day === 11 || day === 18) {
      daysListItem,className = 'day friday';
      daysList.appendChild(daysListItem);
    } else if (day === 24 || day === 31) {
      daysListItem,className = 'day holiday';
      daysList.appendChild(daysListItem);
    } else if (day === 25) {
      daysListItem,className = 'day friday holiday';
      daysList.appendChild(daysListItem);
    } else {
      daysListItem,className = 'day';
      daysList.appendChild(daysListItem);
    }
  }
}

//Exercício 2
createDezDays()

function createHolidaysButton(buttonName) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const holidaysButton = document.createElement('button');
  holidaysButton.innerHTML = buttonName
  holidaysButton.id = 'btn-holiday';
  buttonsContainer.appendChild(holidaysButton);
}
createHolidaysButton('Feriados');