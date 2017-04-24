module.exports = {
	root: true,
	extends: [
		'../../go.js',
	],
}

console.log('unicorn'.green)

const x = 42
switch (x) {
case 42:
	console.log('42')
	break
case 47:
	console.log('47')
	break
default:
	console.log('something else')
}
