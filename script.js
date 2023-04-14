const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const output = document.getElementById('output');

option1.addEventListener('click', () => {
  output.innerHTML = "You explore the town and stumble upon a strange laboratory. Do you:";
  option1.innerHTML = "Investigate the laboratory";
  option2.innerHTML = "Stay away from the laboratory";
});

option2.addEventListener('click', () => {
  output.innerHTML = "You stay home and watch TV. Suddenly, the power goes out. Do you:";
  option1.innerHTML = "Investigate the power outage";
  option2.innerHTML = "Wait for the power to come back on";
});
