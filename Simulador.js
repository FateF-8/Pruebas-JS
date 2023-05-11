function seleccionarAuto() {
	const radios = document.getElementsByName("auto");
	let seleccionado = "";
	for (let i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			seleccionado = radios[i].value;
			break;
		}
	}
	if (seleccionado === "") {
		document.getElementById("resultado").innerHTML = "Por favor, selecciona un auto";
	} else {
		switch (seleccionado) {
			case "porsche":
				document.getElementById("resultado").innerHTML = "Has seleccionado el Porsche 911 GT3 RS - 4.0L 6 cilindros en línea";
				break;
			case "lamborghini":
				document.getElementById("resultado").innerHTML = "Has seleccionado el Lamborghini Aventador - 6.5L V12";
				break;
			case "ferrari":
				document.getElementById("resultado").innerHTML = "Has seleccionado el Ferrari 488 GTB - 3.9L V8";
				break;
			case "mclaren":
				document.getElementById("resultado").innerHTML = "Has seleccionado el McLaren 720S - 4.0L V8";
				break;
			case "audi":
				document.getElementById("resultado").innerHTML = "Has seleccionado el Audi R8 - 5.2L V10";
				break;
		}
	}
}
