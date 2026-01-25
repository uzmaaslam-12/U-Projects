function checkAttendance() {
  let total = Number(document.getElementById("totalClasses").value);
  let attended = Number(document.getElementById("attendedClasses").value);
  let result = document.getElementById("output");

  if (isNaN(total) || isNaN(attended) || total <= 0 || attended < 0) {
    result.innerHTML = "All fields are required and must be a valid number";
    return;
  }
  if (attended > total) {
    result.innerHTML = "Attended classes cannot be greater than total number of classes";
    return;
  }

  let percentage = (attended / total) * 100;

  if (percentage >= 75) {
    resultText = `Attendance: ${percentage.toFixed(2)}% <br>
    <p class="text-success">✔️ You are eligible!</p>`;
  } else {
    resultText = `Attendance: ${percentage.toFixed(2)}% <br>
    <p class="text-danger">❌ You are not eligible!</p>`;
  }

  document.getElementById("modalResult").innerHTML = resultText;
  let modal = new bootstrap.Modal(document.getElementById("resultModal"));
  modal.show();
}
