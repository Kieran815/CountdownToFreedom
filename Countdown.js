var freedomRings = new Date("Jan 20, 2021 12:00:00").getTime();

console.log(countDown);

var countDown = setInterval(() => {
  var now = new Date().getTime();
  console.log(now);
  var deathMarch = freedomRings - now;

  var days = Math.floor(deathMarch / (1000 * 60 * 60 * 24));
  var hours = Math.floor((deathMarch % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((deathMarch % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((deathMarch % (1000 * 60)) / 1000);

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  console.log(days + ":" + hours + ":" + minutes + ":" + seconds);

  document.getElementById("timer").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
  document.getElementById("text").innerHTML = "Trump will be gone in:";

  if (deathMarch < 0) {
    clearInterval(countDown);
    document.getElementById("text").innerHTML = "America has Rejected Authoritarianism";
    document.getElementById("timer").innerHTML = "And Just Like That, He's Gone...";
  }
}, 1000)
