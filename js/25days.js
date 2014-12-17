$(function(){
    $('#fake-date').combodate({
    minYear: 2013,
	});     
});

function updateDateTiles(day, month, year) {
	var dateWarning = document.getElementById('warning');
	if(year == 2014 && month == 12) {
		for(i=1; i <= 25; i++) {
			var dateDiv = document.getElementById('date-12-'+i);
			if(day < i) {
				dateDiv.className = 'img img-locked';
			} 
			else {
				if(day == i) {
					dateDiv.className = 'img img-date';
				}
				else {
					dateDiv.className = 'img img-date past';
				}
				
			}
		}
		dateWarning.className = "hidden";
		dateWarning.innerHTML = "";
	}
	else if(year > 2014) {
		for(i=1; i <= 25; i++) {
			var dateDiv = document.getElementById('date-12-'+i);
			dateDiv.className = 'img img-date past';
		}
		dateWarning.className = "hidden";
		dateWarning.innerHTML = "";
	}
	else {
		for(i=1; i <= 25; i++) {
			var dateDiv = document.getElementById('date-12-'+i);
			dateDiv.className = 'img img-locked';
			}
		var notThereYet = 'Hold on, time traveler, this calendar begins on December 1, 2014.';
		dateWarning.innerHTML = notThereYet;
		dateWarning.className = "alert alert-danger";
	}
}

function fakeDate() {
	var fakeDate = document.getElementById('fake-date').value;
	if(fakeDate != "") {
		document.getElementById('show-date').innerHTML = fakeDate;
		var splitDate = fakeDate.split("-");
		var current_day = splitDate[0];
		var current_month = splitDate[1];
		var current_year = splitDate[2];
		updateDateTiles(current_day, current_month, current_year);
	}
}

function getToday() {
	var today = new Date();
	var current_day = today.getDate();
	var current_month = today.getMonth()+1; //January is 0
	var current_year = today.getFullYear();
	return {
		current_day: current_day, 
		current_month: current_month, 
		current_year: current_year
	};
}

function setRealDate() {
	var today = getToday();
	document.getElementById('show-date').innerHTML = today.current_day+"-"+today.current_month+"-"+today.current_year;
	document.getElementById('fake-date').value = today.current_day+"-"+today.current_month+"-"+today.current_year;
	updateDateTiles(today.current_day, today.current_month, today.current_year);
}


function drawDateTiles() {
	for(i=1; i <= 25; i++) {
		var dateDiv = document.createElement('div');
		dateDiv.innerHTML = '<p>Dec '+i+'</p>';
		dateDiv.className = 'img'
		dateDiv.id = 'date-12-'+i;
		document.getElementById('dates').appendChild(dateDiv);
	}
}

function setCalendar() {
	drawDateTiles();
	setRealDate();
}

window.onload = setCalendar();
