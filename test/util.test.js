const test = require('tape')

const { exists, pipe, compose } = require('../src/util')


// exists

const exists_tests = [
	[ undefined, false ],
	[ null, false ],
	[ [], true ],
	[ {}, true ],
	[ '', true ],
]

exists_tests.forEach(([ input, output ]) =>
	test(`exists(${input}) returns ${output}`, t => {
		t.plan(1)
		const actual = exists(input)
		t.equal(actual, output)
	})
)


// pipe

test('pipe should apply functions from left to right', t => {
	t.plan(1)

	const f = pipe(
		x => x + '1',
		x => x + '2',
		x => x + '3'
	)
	const actual = f('0')
	t.equal(actual, '0123')
})

test('pipe should return value when there are no functions passed', t => {
	t.plan(1)

	const f = pipe()
	const actual = f('ponies')
	t.equal(actual, 'ponies')
})

// compose

test('compose should apply functions from right to left', t => {
	t.plan(1)

	const f = compose(
		x => x + '1',
		x => x + '2',
		x => x + '3',
	)
	const actual = f('0')
	t.equal(actual, '0321')
})

test('compose should return value when there are no functions passed', t => {
	t.plan(1)

	const f = compose()
	const actual = f('ponies')
	t.equal(actual, 'ponies')
})
