var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for(i = 1; i<=100; i++) {
	if(i % 2 === 0) {
		console.log(i)
	}
}