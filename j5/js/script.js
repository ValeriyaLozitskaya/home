var time = 0;
var count = 0;

document.getElementById('startPause').onclick = startPause;
document.getElementById('clear').onclick = reset;

function startPause() {
	if (count == 0) {
		count = 1;
		increment();
		document.getElementById('startPause').innerHTML = 'Pause';
		document.getElementById('startPause').style.background = 'blue';
	} else {
		count = 0;
		document.getElementById('startPause').innerHTML = 'Cont..';
		document.getElementById('startPause').style.background = 'green';
	}
};

function reset(){
	time = 0;
	count = 0;
	document.getElementById('startPause').innerHTML = 'Start';
	document.getElementById('startPause').style.background ='green';
	document.getElementById('timer').innerHTML = "00:00:00";
	document.getElementById('msecs').innerHTML = "00";
};

function increment (){
	if (count == 1){
		setTimeout(function(){
			time++;
			var hours = Math.floor(time/100/60/60)
			var mins = Math.floor(time/100/60%60);
			var secs = Math.floor(time/100%60);
			var msecs = time%100;
			if (hours<10) {
				hours = "0" + hours;
			}
			if (mins<10) {
				mins = "0" + mins;
			};
			if (secs<10) {
				secs = "0" + secs;
			};
			if (msecs<10) {
				msecs = "0" + msecs;
			};
			document.getElementById('timer').innerHTML = hours + ":" + mins + ":" + secs ;
			document.getElementById('msecs').innerHTML = msecs;
			increment();
		}, 10);
	}
};
