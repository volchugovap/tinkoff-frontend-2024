const { createInterface } = require('readline')

function solution(lines) {
	lines.shift()
	const n = lines.length
	const m = lines[0].length

	let rotatedMatrix = new Array(m).fill(null).map(() => new Array(n).fill(null))

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			rotatedMatrix[j][n - 1 - i] = lines[i][j]
		}
	}

	for (let row of rotatedMatrix) {
		console.log(row.join(' '))
	}
}

const lines = []
createInterface({
	input: process.stdin,
	output: process.stdout,
})
	.on('line', line => {
		lines.push(line.trim().split(' '))
	})
	.on('close', () => {
		solution(lines)
	})
