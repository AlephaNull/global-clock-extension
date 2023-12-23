function changeTimezone(date, ianatz) {

  // suppose the date is 12:00 UTC
  var invdate = new Date(date.toLocaleString('en-US', {
    timeZone: ianatz
  }));

  // then invdate will be 07:00 in Toronto
  // and the diff is 5 hours
  var diff = date.getTime() - invdate.getTime();

  // so 12:00 in Toronto is 17:00 UTC
  let finalDate = new Date(date.getTime() - diff);
  return finalDate.toUTCString(); // needs to substract

}



const clock = document.getElementById("clock");
const d = new Date();
hours = d.getHours()
minutes = d.getMinutes()
seconds = d.getSeconds()

// const changeBtn = document.getElementById("change_locale")
// changeBtn.addEventListener("click", changeZone() => {
//
// })
// clock.innerHTML = `${hours}:${minutes}:${seconds}`
clock.innerHTML = changeTimezone(d, "America/Los_Angeles");
