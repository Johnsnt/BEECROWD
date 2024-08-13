var input = require('fs').readFileSync('stdin', 'utf8');
var [tempI, tempF] = input.split('/\r?\n/').flatMap(item => item.split(' ').map(i => +i));

function calcularTempo(horaInicial, horaFinal) {
		let total = ((horaFinal + 24 - horaInicial) % 24);

	if (horaInicial === 0 && horaFinal === 0) {
			total = 24;
	}
	if (total === 0 && horaInicial !== horaFinal) {
			total = 24;
}

if (horaFinal === horaInicial) {
	total = 24;
}

	return total;
}

console.log(`O JOGO DUROU ${calcularTempo(tempI, tempF)} HORA(S)`);

//t = d / y - x * 60
