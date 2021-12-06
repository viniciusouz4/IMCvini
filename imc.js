const calcular = document.getElementById('calcular');


function imc () {
	const nome = document.getElementById('nome').value;
	const altura = document.getElementById('altura').value;
	const peso = document.getElementById('peso').value;
	const resultado = document.getElementById('resultado');

	if (nome !== '' && altura !== '' && peso !== '') {
		const valorimc = (peso / (altura * altura)).toFixed(1);

		let classific = '';

		if (valorimc < 18.5) {
			classific = 'abaixo do peso!!'
		}else if (valorimc < 25) {
			classific = 'com peso ideal, Parabéns!!';
		}else if (valorimc < 30) {
			classific = 'levemente acima do peso!!';
		}else if (valorimc < 35) {
			classific = 'com obesidade no primeiro grau!!';
		}else if (valorimc < 40) {
			classific = 'com obesidade no segundo grau!!';
		}else {
			classific = 'com obesidade no terceiro grau. Cuidado!!!';
		}

		resultado.textContent = `${nome} seu IMC é ${valorimc} e você está ${classific}!!`;
	}else {
		resultado.textContent = 'Preencha Todos os campos';
	}
}

calcular.addEventListener('click', imc);