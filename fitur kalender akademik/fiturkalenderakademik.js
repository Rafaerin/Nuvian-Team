const academicEvents = {
    "2024-09-01": ["Start of Semester"],
    "2024-09-15": ["Midterm Exams"],
    "2024-10-01": ["Project Submission"],
  };
  
  document.getElementById('calendarMonth').addEventListener('change', function() {
    const selectedMonth = this.value;
    const calendarEvents = document.getElementById('calendarEvents');
    calendarEvents.innerHTML = '';
  
    for (const date in academicEvents) {
      if (date.startsWith(selectedMonth)) {
        const eventList = academicEvents[date].map(event => `<li>${event} - ${date}</li>`).join('');
        calendarEvents.innerHTML += eventList;
      }
    }
  });
  