const { createInterface } = require('readline')

function solution(lines) {
	const n = lines.shift()
	let startDir = lines[0][0]

	let directoryPaths = lines
	let rootName = ''
	for (let i = 0; i < n; i++) {
		directoryPaths[i][0] = '@'
		rootName = directoryPaths[i][0]
	}

	directoryPaths.sort()

	for (let i = 0; i < directoryPaths.length; i++) {
		for (let j = 0; j < directoryPaths[i].length - 1; j++) {
			process.stdout.write('  ')
		}
		let currentDir = directoryPaths[i][directoryPaths[i].length - 1]
		if (currentDir === '@') {
			console.log(startDir)
		} else {
			console.log(currentDir)
		}
	}
}

const lines = []
createInterface({
	input: process.stdin,
	output: process.stdout,
})
	.on('line', line => {
		lines.push(line.toString().trim().split('/'))
	})
	.on('close', () => {
		solution(lines)
	})
