//  Fitur Untuk Flashcard 
const flashcard = document.querySelector('.flashcard');
const flipButton = document.getElementById('flipButton');

flipButton.addEventListener('click', () => {
  flashcard.classList.toggle('flipped');
});


document.getElementById('generatePlan').addEventListener('click', function() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const planOutput = document.getElementById('planOutput');

    const calendar = generateAcademicCalendar(startDate, endDate);
    planOutput.innerHTML = createPlan(calendar);
});


//  fitur untuk planner 
function generateAcademicCalendar(startDate, endDate) {
    let calendar = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
        calendar.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return calendar;
}

function createPlan(calendar) {
    return calendar.map((date, index) => {
        return `<div>Day ${index + 1}: ${date.toDateString()}</div>`;
    }).join('');
}


function generateAcademicCalendar(startDate, endDate) {
    let calendar = [];
    let currentDate = startDate;
    const holidays = ["2024-12-25", "2025-01-01"];
    const studyDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    while (currentDate <= endDate) {
        let dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });
        let dateString = currentDate.toISOString().split('T')[0];

        if (studyDays.includes(dayOfWeek) && !holidays.includes(dateString)) {
            calendar.push(new Date(currentDate));
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return calendar;
}


