document.addEventListener('DOMContentLoaded', function() {
	const passwdB = document.getElementById('passwd');
	const btn = document.getElementById('btn');
	const reset = document.getElementById('reset');
	const cbox = document.getElementById('cbox1');
	const length = document.getElementById('length');
	const specialCharacters = ['!', '@', '#', '$', '%', '&', '/', '?', '¿', '¡'];
	var n = 0;
	var ce; //carácteres especiales
	var abc = [];
	var longitud = parseInt(length.value);
	//var password;
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	for (i = 65; i < 91; i++) {
		abc.push(String.fromCharCode(i));
	}
	console.log(abc);

	btn.addEventListener('click', function() {
		passwdB.innerHTML = "";
		let password;
		if (ce === true) {
			passwdB.innerHTML = cePassw(longitud);
			console.log(cePassw(longitud));
		} else if (ce === false) {
			passwdB.innerHTML = Passw(longitud);
			console.log(cePassw(longitud));
		} else {
			console.error("se ha producido un error");
			console.log(ce);
		}
	});

	reset.addEventListener('click', function() {
		passwdB.innerHTML = "";
	});

	function cePassw(l) {
		let i = 0;
		let password;
		while (i < l) {
		let opc = getRandomInt(2)
		console.log(opc);
		if (opc === 0) {
			password += getRandomInt(9);
		} else if(opc === 1) {
			password += specialCharacters[getRandomInt(specialCharacters.length)];
		} else if (opc === 2) {
			password += abc[getRandomInt(abc.length)];
		} else {
			console.error("se ha producido un error")
		}
		i++;
		}
		return password;
	}
	function Passw(l) {
		let i = 0;
		let password;

		while (i < l) {
		let opc = getRandomInt(1);
		console.log(opc);
		if (opc === 0) {
			password += getRandomInt(9);
		} else if (opc === 1) {
			password += abc[getRandomInt(abc.length)];
		} else {
			console.error("se ha producido un error")
		}
		i++;
		}
		return password;
	}

	cbox.addEventListener('change', function() {
		n++;
		if (n % 2 !== 0) {
			ce = true;
			console.log("cbox = true")
		} else {
			ce = false;
			console.log("cbox = false")
		}
	});



});