document.getElementById('createAssignment').addEventListener('click', function() {
    const assignmentName = prompt("Enter assignment name:");
    if (assignmentName) {
      const assignmentList = document.getElementById('assignmentList');
      const li = document.createElement('li');
      li.textContent = assignmentName + ' - Due Date: ' + new Date().toLocaleDateString();
      assignmentList.appendChild(li);
    }
  });
  
  document.getElementById('submitWork').addEventListener('click', function() {
    const fileInput = document.getElementById('workFile');
    if (fileInput.files.length > 0) {
      alert('Work submitted: ' + fileInput.files[0].name);
      fileInput.value = '';
    } else {
      alert('Please select a file to upload.');
    }
  });
  