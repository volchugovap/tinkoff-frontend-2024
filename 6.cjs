const { createInterface } = require('readline')

function solution(lines) {
	lines.shift()
	let paths = lines.sort()

	console.log(lines)
}

const lines = []
createInterface({
	input: process.stdin,
	output: process.stdout,
})
	.on('line', line => {
		lines.push(line.toString().trim())
	})
	.on('close', () => {
		solution(lines)
	})
