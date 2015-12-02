$(document).ready( function () {

	console.log("reading apiCall.js")

	// get location
	var location = null;

	//build url
	var url = "http://api.wunderground.com/api/8c1a8ef70cc596b2/forecast/q/autoip.json";

	$.ajax({
		url : url,
  		dataType : "jsonp",
  		success : function(parsed_json) {
  			console.log("parsed_json");
  			console.log(parsed_json)

  			//array to capture forecast data
  			var data = [];

  			for(var i = 0; i < 4; i++) {

  				//create placeholder object for current day's data
  				var dayData = {
  					temp    : null,
  					iconUrl : null,
  					weekday : null,
  				};

  				// populate dayData object with day's data from api call
	  			dayData.temp = parsed_json.forecast.simpleforecast.forecastday[i].high.fahrenheit + "&#176";
	  			dayData.iconUrl = parsed_json.forecast.simpleforecast.forecastday[i].icon_url;
	  			dayData.weekday = parsed_json.forecast.simpleforecast.forecastday[i].date.weekday;

	  			// add current day's data to data array
	  			data.push(dayData);

	  		}

	  		console.log("data");
	  		console.log(data);

	  		//update icons on page
	  		$("#todayConditionIcon").attr("src", data[0].iconUrl);
	  		$("#dayOneIcon").attr("src", data[1].iconUrl);
	  		$("#dayTwoIcon").attr("src", data[2].iconUrl);
	  		$("#dayThreeIcon").attr("src", data[3].iconUrl);

	  		//update temps on page
	  		$("#todayTemp").html(data[0].temp);
	  		$("#dayOneTemp").html(data[1].temp);
	  		$("#dayTwoTemp").html(data[2].temp);
	  		$("#dayThreeTemp").html(data[3].temp);

	  		//update days on page
	  		$("#dayOneName").html(data[1].weekday);
	  		$("#dayTwoName").html(data[2].weekday);
	  		$("#dayThreeName").html(data[3].weekday);
  		}
  	});

})