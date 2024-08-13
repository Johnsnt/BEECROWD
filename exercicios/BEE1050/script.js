var input = require('fs').readFileSync('stdin', 'utf8');
var [DDD] = input.split('/\R?\n/').map(i => +i);

switch (DDD) {
	case 61: 
	return console.log('Brasilia');
	case 71:
		return console.log('Salvador');
	case 11: 
		return console.log('Sao Paulo');
	case 21: 
		return console.log('Rio de Janeiro');
	case 32: 
		return console.log('Juiz de Fora');
	case 19: 
		return console.log('Campinas');
	case 27: 
		return console.log('Vitoria');
	case 31: 
		return console.log('Belo Horizonte');
	default:
			return console.log('DDD nao cadastrado');
}