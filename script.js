function updateClock() {
  const now = new Date();
  let hrs = now.getHours();
  const mins = now.getMinutes();
  const secs = now.getSeconds();
  const ampm = hrs >= 12 ? "PM" : "AM";

  hrs = hrs % 12 || 12;

  document.getElementById("hours").textContent = String(hrs).padStart(2, '0');
  document.getElementById("minutes").textContent = String(mins).padStart(2, '0');
  document.getElementById("seconds").textContent = String(secs).padStart(2, '0');
  document.getElementById("ampm").textContent = ampm;
}

setInterval(updateClock, 1000);
updateClock();
