let selectedCity = "";

let showCurrentTime = function () {
  let clock = document.getElementById("clock");

  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  let showTime =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");

  if (selectedCity === "rome") {
    showTime = getCurrentTimeInRome();
  }
  if (selectedCity === "tauranga") {
    showTime = taurangaTime;
  }

  clock.innerText = showTime;
};

showCurrentTime();

setInterval(showCurrentTime, 1000);

document.getElementById("rome").addEventListener("click", function () {
  selectedCity = "rome";
});

function getCurrentTimeInRome() {
  const targetTimeZone = "Europe/Rome";

  const currentDate = new Date();
  const options = { timeZone: targetTimeZone };
  setInterval(getCurrentTimeInRome, 1000);

  return currentDate.toLocaleTimeString("en-US", options);
}

document.getElementById("tauranga").addEventListener("click", function () {
  selectedCity = "tauranga";
});

function getTimeTauranga() {
  let time = new Date();

  let taurangaHour = time.getHours();
  let taurangaMinute = time.getMinutes();
  let taurangaSeconds = time.getSeconds();
  setInterval(getTimeTauranga, 1000);
  let taurangaTime =
    taurangaHour + ":" + taurangaMinute + ":" + "0" + taurangaSeconds;

  return taurangaTime;
}
let taurangaTime = getTimeTauranga();
console.log(taurangaTime);
