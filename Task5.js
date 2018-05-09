(function() {
	var count = 1;
	document.getElementById("green").addEventListener('click', function(){

		count++
		if (count%2===0){
			document.getElementById("box1") .style.backgroundColor = 'green'

			document.getElementById("green") .innerHTML = "Make red"
		}

		else {
			document.getElementById("box1").style.backgroundColor = 'red'

			document.getElementById("green").innerHTML = "Make green"
		}
	})
	
})()