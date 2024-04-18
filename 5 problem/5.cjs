const { createInterface } = require('readline')

function solution(lines) {
	let [numRows] = lines[0].map(Number)
	lines.shift()

	let dynProg = new Array(numRows).fill(null).map(() => new Array(3).fill(-1))

	let grid = new Array(numRows).fill(null).map(() => new Array(3).fill(0))

	for (let i = 0; i < numRows; i++) {
		let row = lines[i]
		for (let j = 0; j < 3; j++) {
			if (row[j] === 'W') {
				grid[i][j] = -1
			} else if (row[j] === '.') {
				grid[i][j] = 0
			} else if (row[j] === 'C') {
				grid[i][j] = 1
			}
		}
	}

	for (let j = 0; j < 3; j++) {
		dynProg[0][j] = grid[0][j]
	}

	for (let i = 1; i < numRows; i++) {
		for (let j = 0; j < 3; j++) {
			for (let dj = -1; dj <= 1; dj++) {
				if (
					j + dj >= 0 &&
					j + dj < 3 &&
					dynProg[i - 1][j + dj] !== -1 &&
					grid[i][j] !== -1
				) {
					dynProg[i][j] = Math.max(
						dynProg[i][j],
						dynProg[i - 1][j + dj] + grid[i][j]
					)
				}
			}
		}
	}

	let maxEaten = 0
	for (let i = 0; i < numRows; i++) {
		for (let j = 0; j < 3; j++) {
			maxEaten = Math.max(maxEaten, dynProg[i][j])
		}
	}

	console.log(maxEaten)
}

const lines = []
createInterface({
	input: process.stdin,
	output: process.stdout,
})
	.on('line', line => {
		lines.push(line.trim().split(''))
	})
	.on('close', () => {
		solution(lines)
	})
