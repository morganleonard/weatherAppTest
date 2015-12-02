$(document).ready( function () {

	console.log("reading apiCall.js")

	// get location
	var location = null;

	//build url
	var url = null;

	$.ajax({
		url : "http://api.wunderground.com/api/8c1a8ef70cc596b2/forecast/q/autoip.json",
  		dataType : "jsonp",
  		success : function(parsed_json) {
  			console.log("parsed_json");
  			console.log(parsed_json)

  			var data = [];

  			for(var i = 0; i < 4; i++) {

  				var dayData = {
  					temp    : null,
  					iconUrl : null,
  					weekday : null,
  				};

	  			dayData.temp = parsed_json.forecast.simpleforecast.forecastday[i].high.fahrenheit;
	  			// console.log("temp");
	  			// console.log(temp);

	  			dayData.iconUrl = parsed_json.forecast.simpleforecast.forecastday[i].icon_url;
	  			// console.log("iconUrl");
	  			// console.log(iconUrl);
	  			
	  			dayData.weekday = parsed_json.forecast.simpleforecast.forecastday[i].date.weekday;
	  			// console.log("weekday");
	  			// console.log(weekday);

	  			data.push(dayData);

	  		}

	  		console.log("data");
	  		console.log(data);

  			//var location = parsed_json['location']['city'];
  			//var temp_f = parsed_json['current_observation']['temp_f'];
  			//alert("Current temperature in " + location + " is: " + temp_f);
  		}
  	});

})