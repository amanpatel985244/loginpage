const apikey ="16a13b2aeae0bd4395969cc4a87871c7";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiurl +city+ `&appid=${apikey}`);
if(response.status == 404){
    document.querySelector(".city2").style.display = "block";
    document.querySelector(".temp2").style.display = "block";
    document.querySelector(".city").style.display = "none";
    document.querySelector(".temp").style.display = "none";
    document.querySelector(".humidity").style.display = "none";
    document.querySelector(".wind").style.display = "none";

    
   
}
else{

    document.querySelector(".temp2").style.display = "none";
    document.querySelector(".humidity").style.display = "block";
    document.querySelector(".wind").style.display = "block";
    document.querySelector(".temp").style.display = "block";
    document.querySelector(".city").style.display = "block";
    document.querySelector(".city2").style.display = "none";

    var data = await response.json();

    // let sunrise = data.sys.sunrise;
    // let sunset = data.sys.sunset;

//     var risetime= convertUnixTimestamp(1696639427);
// var settime = convertUnixTimestamp(1696681966);

    console.log(data);
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" ;
document.querySelector(".humidity").innerHTML = data.main.humidity + " % ";
document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h ";
document.querySelector('.atmos').innerHTML=data.weather[0]. description;
// document.querySelector('.sun1').innerHTML=sunrise;
// document.querySelector('.sun2').innerHTML=sunset;



let weatherCode = data.weather[0].icon;



if(weatherCode == '01d'){
    weatherIcon.src ="01d@2x.png";
}
else if(weatherCode == '02d'){
    weatherIcon.src="02d@2x.png";
}
else if(weatherCode== '03d'){
    weatherIcon.src="03d@2x.png";
}
else if(weatherCode== '04d'){
    weatherIcon.src="04d@2x.png";
}
else if(weatherCode== '09d'){
    weatherIcon.src="09d@2x.png";
}
else if(weatherCode== '10d'){
    weatherIcon.src="10d@2x.png";
}
else if(weatherCode=='11d'){
    weatherIcon.src="11d@2x.png";
}
else if(weatherCode=='13d'){
    weatherIcon.src="13d@2x.png";
}
else if(weatherCode== '50d'){
    weatherIcon.src="50d@2x.png";
}

else if(weatherCode== '01n'){
    weatherIcon.src ="01n@2x.png";
}
else if(weatherCode== '02n'){
    weatherIcon.src="02n@2x.png";
}
else if(weatherCode== '03n'){
    weatherIcon.src="03n@2x.png";
}
else if(weatherCode== '04n'){
    weatherIcon.src="04n@2x.png";
}
else if(weatherCode== '09n'){
    weatherIcon.src="09n@2x.png";
}
else if(weatherCode== '10n'){
    weatherIcon.src="10n@2x.png";
}
else if(weatherCode=='11n'){
    weatherIcon.src="11n@2x.png";
}
else if(weatherCode== '13n'){
    weatherIcon.src="13n@2x.png";
}
else if(weatherCode== '50n'){
    weatherIcon.src="50n@2x.png";
}

let weatherlike = data.weather[0].main;
if(weatherlike=="Clouds"){
    document.body.style.backgroundImage = "url('clouds-n')";
    document.querySelector('.card').style.background = "transparent";
    
}
else if(weatherlike =="Clear"){
    document.body.style.backgroundImage = "url('clear-skies')";
    document.querySelector('.card').style.background = "transparent";
}
else if(weatherlike =="Rain"){
    document.body.style.backgroundImage = "url('rain.webp')";
    document.querySelector('.card').style.background = "transparent";
}
else if(weatherlike =="Snow"){
    document.body.style.backgroundImage = "url('snow')";
    document.querySelector('.card').style.background = "transparent";
}
else if(weatherlike =="Synny"){
    document.body.style.backgroundImage = "url('synny')";
    document.querySelector('.card').style.background = "transparent";
}
else if(weatherlike =="Wind"){
    document.body.style.backgroundImage = "url('wind')";
    document.querySelector('.card').style.background = "transparent";
}
else if(weatherlike =="Haze"){
    document.body.style.backgroundImage = "url('haze2')";
    document.querySelector('.card').style.background = "transparent";
}


}


}
document.querySelector(".weather").style.display="block";


// Calling showTime function at every second
setInterval(showTime, 1000 );

// Defining showTime funcion
function showTime() {
	// Getting current time and date
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	// Setting time for 12 Hrs format
	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "PM";
        
          
        
	} else if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}




	hour =
		hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime =
		hour +
		":" +
		min +
		":" +
		// sec +
		am_pm;

	// Displaying the time
	document.getElementById("clock").innerHTML =currentTime;
}

showTime();


    




searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})



const username = document.getElementById("input1");
const password = document.getElementById("input2");

function signup() {
    if (username.value === '' || password.value === '') {
        alert("Please enter username and password");
    } else if (username.value === "") {
        alert("Please enter your username");
    } else if (password.value === '') {
        alert("Please enter your password");
    }
     else {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
       

   
        // alert("Welcome, do you want to login?");
        // document.querySelector(".btn2").style.display = "inline";
        // document.querySelector(".btn1").style.display = "none";
       
        document.getElementById("message").innerHTML="SignUp Completed";
       username.value="";
       password.value="";
        
    }
}
function loging(){
    if (username.value === '' || password.value === '') {
        alert("Please enter username and password");
    } else if (username.value === "") {
        alert("Please enter your username");
    } else if (password.value === '') {
        alert("Please enter your password");
    }

   else if (username.value !== '' && password.value !== ''){
        document.getElementById("message").innerHTML="Login successful";
 

        document.querySelector(".btn3").style.display="inline";
        document.querySelector(".btn2").style.display="none";

        document.querySelector(".card").style.display="block";
        document.querySelector(".front").style.display="none";
     
       

        username.value="";
        password.value="";
    }
   
}


function login() {
    
    
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username.value === storedUsername && password.value === storedPassword) {
        document.getElementById("message").innerHTML="Login successful";
     

        document.querySelector(".btn3").style.display="inline";
        document.querySelector(".btn2").style.display="none";

        document.querySelector(".card").style.display="block";
        document.querySelector(".front").style.display="none";
     
       

        username.value="";
        password.value="";
         // alert("Login successful");
        // console.log(username.value)
        // console.log(password.value)
      

    }
    else if(username.value !== storedUsername && password.value !== storedPassword) {
        document.getElementById("message").innerHTML="Invalid Username & Password";
    } else if(username.value !== storedUsername) {
        document.getElementById("message").innerHTML="Invalid Username";
    }
    else if(password.value !== storedPassword){
        document.getElementById("message").innerHTML="Invalid Password";
    }
  
}

function logout(){
    document.getElementById("a").style.display="none";
    document.querySelector(".btn3").style.display="none";
    document.querySelector(".btng").style.display="inline";
    document.querySelector(".card").style.display="none";
       
        document.querySelector(".front").style.display="block";


        location.reload();
        document.getElementById("message").innerHTML="Logout successful";
   
}





function loginG(){


    
   
    document.getElementById("input1").placeholder='username@google.com';

    document.getElementById("message").innerHTML="Login with Google";

   document.getElementById("a").style.display="none";
   document.getElementById("a1").style.display ="inline";
    
  
    document.querySelector(".inbtn .btnG").style.backgroundColor="aqua";
    document.querySelector(".inbtn .btnA ").style.backgroundColor="greenyellow";
    document.querySelector(".inbtn .btnT ").style.backgroundColor="greenyellow";
    document.querySelector(".inbtn .btnF ").style.backgroundColor="greenyellow";
    document.querySelector(".inbtn .btnL ").style.backgroundColor="greenyellow";

    document.querySelector(".box h3").style.color= "rgb(231, 68, 68)";
    document.getElementById("x").style.color= "rgb(231, 68, 68)";
    document.getElementById("a").style.backgroundColor= "rgb(231, 68, 68)";
    document.getElementById("a1").style.backgroundColor= "rgb(231, 68, 68)";
    document.getElementById("a").style.borderColor= "rgb(231, 68, 68)";
    document.getElementById("a1").style.borderColor= "rgb(231, 68, 68)";
    document.getElementById("message").style.color= "rgb(231, 68, 68)";
    document.querySelector(".front").style.borderColor= "rgb(231, 68, 68)";
    document.querySelector(".front h3").style.color= "rgb(231, 68, 68)";
    document.querySelector(".box button").style.backgroundColor= "rgb(231, 68, 68)";
    document.querySelector(".box button").style.borderColor= "rgb(231, 68, 68)";
    document.getElementById("input1").style.borderColor= "rgb(231, 68, 68)";
    document.getElementById("input2").style.borderColor= "rgb(231, 68, 68)";
   
    




}
function loginA(){
    document.getElementById("a").style.display="none";
    document.getElementById("a1").style.display ="inline";

    document.getElementById("input1").placeholder='Apple Id';
    document.getElementById("message").innerHTML="Login with Apple";
    document.querySelector(".inbtn .btnA").style.backgroundColor="aqua";
    document.querySelector(".inbtn .btnG ").style.backgroundColor="greenyellow";
    document.querySelector(".inbtn .btnT ").style.backgroundColor="greenyellow";
    document.querySelector(".inbtn .btnF ").style.backgroundColor="greenyellow";
    document.querySelector(".inbtn .btnL ").style.backgroundColor="greenyellow";

    document.querySelector(".box h3").style.color= "rgb(0,0,0)";
    document.getElementById("x").style.color= "rgb(0,0,0)";
    document.getElementById("a").style.backgroundColor= "rgb(0,0,0)";
    document.getElementById("a1").style.backgroundColor= "rgb(0,0,0)";
    document.getElementById("a").style.borderColor= "rgb(0,0,0)";
    document.getElementById("a1").style.borderColor= "rgb(0,0,0)";
    document.getElementById("a").style.color= "white";
    document.getElementById("a1").style.color= "white";
    document.querySelector(".front h3").style.color= "rgb(0,0,0)";
    document.querySelector(".box button").style.backgroundColor= "rgb(0,0,0)";
    document.querySelector(".box button").style.color= "white";
    document.querySelector(".box button").style.borderColor= "rgb(0,0,0)";
    document.getElementById("input1").style.borderColor= "rgb(0,0,0)";
    document.getElementById("input2").style.borderColor= "rgb(0,0,0)";
    document.getElementById("message").style.color= "rgb(0,0,0)";
    document.querySelector(".front").style.borderColor= "rgb(0,0,0)";
   
}
function loginT(){
    document.getElementById("a").style.display="none";
    document.getElementById("a1").style.display ="inline";

    document.getElementById("input1").placeholder='Twitter username';
    document.getElementById("message").innerHTML="Login with Twitter";
    document.querySelector(".inbtn .btnT").style.backgroundColor="aqua";
    document.querySelector(".inbtn .btnG ").style.backgroundColor="greenyellow";
    document.querySelector(".inbtn .btnA ").style.backgroundColor="greenyellow";
    document.querySelector(".inbtn .btnF ").style.backgroundColor="greenyellow";
    document.querySelector(".inbtn .btnL ").style.backgroundColor="greenyellow";

    document.querySelector(".box h3").style.color= "rgb(49, 215, 237)"; 
    document.getElementById("x").style.color= "rgb(49, 215, 237)"; 
    document.getElementById("a").style.backgroundColor= "rgb(49, 215, 237)"; 
    document.getElementById("a1").style.backgroundColor= "rgb(49, 215, 237)"; 
    document.getElementById("a").style.borderColor= "rgb(49, 215, 237)"; 
    document.getElementById("a1").style.borderColor= "rgb(49, 215, 237)"; 
    document.querySelector(".front h3").style.color= "rgb(49, 215, 237)"; 
    document.querySelector(".box button").style.backgroundColor= "rgb(49, 215, 237)"; 
    document.querySelector(".box button").style.borderColor= "rgb(49, 215, 237)"; 
    document.getElementById("input1").style.borderColor= "rgb(49, 215, 237)"; 
    document.getElementById("input2").style.borderColor= "rgb(49, 215, 237)"; 
    document.getElementById("message").style.color=  "rgb(49, 215, 237)"; 
    document.querySelector(".front").style.borderColor=  "rgb(49, 215, 237)"; 
   
}
function loginF(){
    document.getElementById("a").style.display="none";
    document.getElementById("a1").style.display ="inline";

    document.getElementById("input1").placeholder='Facebook username';
    document.getElementById("message").innerHTML="Login with Facebook";
    document.querySelector(".inbtn .btnF").style.backgroundColor="aqua";
    document.querySelector(".inbtn .btnG ").style.backgroundColor="greenyellow";
    document.querySelector(".inbtn .btnA ").style.backgroundColor="greenyellow";
    document.querySelector(".inbtn .btnT ").style.backgroundColor="greenyellow";
    document.querySelector(".inbtn .btnL ").style.backgroundColor="greenyellow";

    document.querySelector(".box h3").style.color= "rgb(17, 0, 255)";
    document.getElementById("x").style.color= "rgb(17, 0, 255)";
    document.getElementById("a").style.backgroundColor= "rgb(17, 0, 255)";
    document.getElementById("a1").style.backgroundColor= "rgb(17, 0, 255)";
    document.getElementById("a").style.borderColor= "rgb(17, 0, 255)";
    document.getElementById("a1").style.borderColor= "rgb(17, 0, 255)";
    document.querySelector(".front h3").style.color= "rgb(17, 0, 255)";
    document.querySelector(".box button").style.backgroundColor= "rgb(17, 0, 255)";
    document.querySelector(".box button").style.borderColor= "rgb(17, 0, 255)";
    document.getElementById("input1").style.borderColor="rgb(17, 0, 255)";
    document.getElementById("input2").style.borderColor= "rgb(17, 0, 255)";
    document.getElementById("message").style.color= "rgb(17, 0, 255)";
    document.querySelector(".front").style.borderColor= "rgb(17, 0, 255)";
   
}
function loginL(){
    document.getElementById("a").style.display="none";
    document.getElementById("a1").style.display ="inline";

    document.getElementById("input1").placeholder='Linkdin username';
    document.getElementById("message").innerHTML="Login with Linkdin";
    document.querySelector(".inbtn .btnL").style.backgroundColor="aqua";
    document.querySelector(".inbtn .btnG ").style.backgroundColor="greenyellow";
    document.querySelector(".inbtn .btnA ").style.backgroundColor="greenyellow";
    document.querySelector(".inbtn .btnT ").style.backgroundColor="greenyellow";
    document.querySelector(".inbtn .btnF ").style.backgroundColor="greenyellow";

    document.querySelector(".box h3").style.color= "rgb(49, 87, 237)";
    document.getElementById("x").style.color= "rgb(49, 87, 237)";
    document.getElementById("a").style.backgroundColor= "rgb(49, 87, 237)";
    document.getElementById("a1").style.backgroundColor= "rgb(49, 87, 237)";
    document.getElementById("a").style.borderColor= "rgb(49, 87, 237)";
    document.getElementById("a1").style.borderColor= "rgb(49, 87, 237)";
    document.querySelector(".front h3").style.color= "rgb(49, 87, 237)";
    document.querySelector(".box button").style.backgroundColor= "rgb(49, 87, 237)";
    document.querySelector(".box button").style.borderColor= "rgb(49, 87, 237)";
    document.getElementById("input1").style.borderColor= "rgb(49, 87, 237)";
    document.getElementById("input2").style.borderColor= "rgb(49, 87, 237)";
    document.getElementById("message").style.color= "rgb(49, 87, 237)";
    document.querySelector(".front").style.borderColor= "rgb(49, 87, 237)";
   
}





