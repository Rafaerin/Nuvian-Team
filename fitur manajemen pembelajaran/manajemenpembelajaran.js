const progressData = {
    "HTML Basics": 80,
    "CSS Styling": 60,
    "JavaScript Fundamentals": 40
  };
  
  const progressDashboard = document.getElementById('progressDashboard');
  
  for (const skill in progressData) {
    const progressElement = document.querySelector(`.skill span:contains("${skill}")`).nextElementSibling.querySelector('.progress');
    progressElement.style.width = progressData[skill] + '%';
  }
  