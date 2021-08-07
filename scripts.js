// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.onload = function () {

  // const takeoffElement = document.getElementById('takeoff');
  // takeoffElement.addEventListener('click', takeoff);

  // const landElement = document.getElementById('landing');
  // landElement.onclick = landing;

  document.getElementById('takeoff').onclick = takeoff
  document.getElementById('landing').onclick = landing
  document.getElementById('missionAbort').onclick = abortMission

  const rocket = document.getElementById('rocket');
  document.getElementById('downButton').onclick = () => { moveDown(rocket) };
  document.getElementById('upButton').onclick = () => { moveUp(rocket) };
  document.getElementById('leftButton').onclick = () => { moveLeft(rocket) };
  document.getElementById('rightButton').onclick = () => { moveRight(rocket) };
};

function moveDown(rocket) {
  const newTop = rocket.offsetTop + 10;
  const bottomBorder = rocket.parentElement.offsetHeight - rocket.offsetHeight;
  if (newTop < bottomBorder) {
    rocket.style.top = newTop + 'px';
  }
}

function moveUp(rocket) {
  const newTop = rocket.offsetTop - 10;
  if (newTop >= 0) {
    rocket.style.top = newTop + 'px';
  }
}

function moveLeft(rocket) {
  const newLeft = rocket.offsetLeft - 10;
  rocket.style.left = newLeft + 'px';
}

function moveRight(rocket) {
  const newLeft = rocket.offsetLeft + 10;
  rocket.style.left = newLeft + 'px';
}

function abortMission() {
  const choice = 'Confirm that you want to abort the mission.';
  if (choice) {
    reset('Mission aborted.');
  }
}

function landing() {
  alert('The shuttle is landing. Landing gear engaged.');
  reset('The shuttle has landed.')
}

function reset(statusValue) {
  const status = document.getElementById('flightStatus');
  status.textContent = statusValue;

  const shuttleBackground = document.getElementById('shuttleBackground');
  shuttleBackground.style.background = 'green';

  const height = document.getElementById('spaceShuttleHeight');
  height.textContent = 0;

  const rocket = document.getElementById('rocket');
  rocket.style.top = 0;
  const middle = rocket.parentElement.offsetWidth / 2;
  rocket.style.left = middle + 'px';
}

function takeoff() {
  const choice = confirm("Confirm that the shuttle is ready for takeoff.")
  if (choice) {
    const status = document.getElementById('flightStatus');
    status.textContent = 'Shuttle in flight';

    const shuttleBackground = document.getElementById('shuttleBackground');
    shuttleBackground.style.background = 'blue';

    const height = document.getElementById('spaceShuttleHeight');
    const heightValue = Number(height.textContent);
    height.textContent = heightValue + 10_000;
  }
}

