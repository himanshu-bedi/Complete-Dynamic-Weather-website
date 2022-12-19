console.log("hii");
let submitbtn = document.getElementById("submitbtn");
let cityname = document.getElementById("CityName");
let city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
let dayy=document.getElementById('day');
let datee=document.getElementById('date');
let timee=document.getElementById('time');


const datahide=document.querySelector('.middle_layer');

function incelsius(temp) {
  let tem = temp - 273.15;
  tem = tem.toFixed(2);
  return tem;
}

let takeaction = async (event) => {
  event.preventDefault();
  let city = cityname.value;
  console.log(city);
  if (city === "") {
    city_name.innerText = "ERROR ! ENTER A CITY";
    datahide.classList.add('data_hide');
  } else {

    datahide.classList.remove('data_hide');
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=226163db47f080177e6e93d94dabe6a4`;
      let response = await fetch(url);
      const data = await response.json();
      const arrdata = [data];
      temp.innerHTML = incelsius(arrdata[0].main.temp);
      temp.innerHTML += "<sup>o</sup>C";
      console.log(arrdata[0].main.temp);

      const tempStatus = arrdata[0].weather[0].main;

      if (tempStatus === "Sunny") {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;font-size: 8rem'></i>";
      } else if (tempStatus === "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;font-size: 8rem'></i>";
      } else if (tempStatus === "Rainy") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;font-size: 8rem'></i>";
      } else if (tempStatus === "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#fffa65;font-size: 8rem'></i>";
      } else {
       
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color:#e5f5f5;font-size: 8rem'></i>";
      }

      city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
      console.log(data);
    } catch {
      city_name.innerText = "Please enter City name properly";
      datahide.classList.add('data_hide');
    }
  }
};

submitbtn.addEventListener("click", takeaction);

const getCurrentDay = () => {
    

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
  };

  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var now = new Date();
    var month = months[now.getMonth()];
    
    var date = now.getDate();

    let hours = now.getHours();
    let mins = now.getMinutes();

    
    let periods = "AM";

    if (hours > 11) {
      periods = "PM";
      if (hours > 12) hours -= 12;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }


  timee.innerHTML=`${hours}:${mins}${periods}`;

  console.log("hellooo");

  datee.innerHTML=`${date} ${month}`;
  dayy.innerHTML=getCurrentDay();

//   val.innerText=tempStatus;

