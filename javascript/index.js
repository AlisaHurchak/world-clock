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
function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "#current") {
    cityTimezone = moment().tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city" >
          <div class="city-list">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
