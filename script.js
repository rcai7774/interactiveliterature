fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
		let arr = data;
		let quote = Math.floor(Math.random() * arr.length);
		document.getElementById("ouch").innerHTML = "Quote of the moment: " + arr[quote].text + " - " + arr[quote].author;
  }); 

	//-----------------------------------------------------------
	function weatherBalloon( cityID ) {
  var key = '056799c78dc4ddbccce6d1f14839be09';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    displayWeather(data);
  })
  .catch(function(error) {
    // catch any errors
		console.log(error)
  });
}
//-------------------------------------------------------------
 

	function displayWeather(data) {
	var celcius = Math.round(parseFloat(data.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32); 
	var description = data.weather[0].description;
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = fahrenheit + '&deg;' + "F";
	document.getElementById('location').innerHTML = "Weather in " + data.name + ":";
	
	if( description.indexOf('rain') > 0 ) {
  	document.getElementById("type").innerHTML =  'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.getElementById("type").innerHTML =  'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.getElementById("type").innerHTML =  'sunny';
  }
}
 weatherBalloon( 5368361 );