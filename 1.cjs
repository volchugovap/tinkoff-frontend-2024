const { createInterface } = require('readline')

function solution(line) {
	line.shift()
	let test = line[0].split(' ').map(Number)
	let max_five = 0
	let fives = 0

	if (test.length >= 7) {
		for (let i = 0; i <= test.length - 7; i++) {
			fives = 0
			for (let j = i; j <= i + 6; j++) {
				if (test[j] === 2 || test[j] === 3) {
					fives = 0
					break
				} else if (test[j] === 5) {
					fives += 1
				}
			}

			if (max_five === 7) {
				break
			} else if (max_five < fives) {
				max_five = fives
			}
		}

		if (max_five === 0) {
			console.log(-1)
		} else {
			console.log(max_five)
		}
	} else {
		console.log(-1)
	}
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
