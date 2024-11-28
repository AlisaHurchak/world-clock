function updateTime() {
  //Chicago
  let chicagoElement = document.querySelector("#chicago");
  let chicagoDateElement = chicagoElement.querySelector(".date");
  let chicagoTimeElement = chicagoElement.querySelector(" .time");
  let chicagoTime = moment().tz("America/Chicago");

  chicagoDateElement.innerHTML = moment().format("MMMM Do YYYY");
  chicagoTimeElement.innerHTML = chicagoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //El Salvador

  let salvadorElement = document.querySelector("#el-salvador");
  let salvadorDateElement = salvadorElement.querySelector(".date");
  let salvadorTimeElement = salvadorElement.querySelector(" .time");
  let salvadorTime = moment().tz("America/El_Salvador");

  salvadorDateElement.innerHTML = moment().format("MMMM Do YYYY");
  salvadorTimeElement.innerHTML = salvadorTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Toronto

  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(" .time");
  let torontoTime = moment().tz("America/Toronto");

  torontoDateElement.innerHTML = moment().format("MMMM Do YYYY");
  torontoTimeElement.innerHTML = torontoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
