//vars declaration
var arr = fillArray();
var userName = prompt('input user name');

//functions declaration
function fillArray(){
	var arr = [];
	for ( var i = 0; i < 5; i++){		
		arr.push(prompt('input ' + (i + 1) + '-th name'));
		// alert(arr[i]);
	}
	alert(arr);
	return arr;
}

function checkArray(arr, userName){
	var corectName = false;
	for ( var i = 0; i < arr.length; i++){
		if (arr[i] == userName){
			corectName = true;
			alert(userName + ', input success');
			break;
		}
	}
	if ( !corectName) {
		alert( userName + ', input fail');
	}
}

//functions do
checkArray(arr, userName);