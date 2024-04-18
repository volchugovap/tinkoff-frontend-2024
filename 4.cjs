const { createInterface } = require('readline')

function solution(lines) {
	const [size] = lines[0][0]
	Number(size)
	console.log(size)
	const [rotationDirection] = lines[0][1]
	lines.shift()

	const firstHalf = size / 2
	const center = (size + 1) / 2
	let swapOperations = []
	for (let i = 0; i < firstHalf; i++) {
		for (let j = i; j < center; j++) {
			if (rotationDirection === 'R') {
				swapOperations.push([i, j, size - j - 1, i])
				swapOperations.push([size - j - 1, i, size - i - 1, size - j - 1])
				swapOperations.push([size - i - 1, size - j - 1, j, size - i - 1])
			} else {
				swapOperations.push([i, j, j, size - 1 - i])
				swapOperations.push([j, size - 1 - i, size - 1 - i, size - 1 - j])
				swapOperations.push([size - 1 - i, size - 1 - j, size - 1 - j, i])
			}
		}
	}
	console.log(swapOperations.length)
	swapOperations.forEach(swapOp => {
		console.log(swapOp.join(' '))
	})
}

const lines = []
createInterface({
	input: process.stdin,
	output: process.stdout,
})
	.on('line', line => {
		lines.push(line.toString().trim().split(' '))
	})
	.on('close', () => {
		solution(lines)
	})
