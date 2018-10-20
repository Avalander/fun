const test = require('tape')

const { isEmpty, head, tail } = require('list')


const ponies = [
	'Twilight Sparkle',
	'Rainbow Dash',
	'Pinkie Pie',
]


// isEmpty

test('isEmpty([]) returns true', t => {
	t.plan(1)

	const actual = isEmpty([])
	t.equal(actual, true)
})

test('isEmpty([ 1 ]) returns false', t => {
	t.plan(1)

	const actual = isEmpty([ 1 ])
	t.equal(actual, false)
})

test('isEmpty(ponies) returns false', t => {
	t.plan(1)

	const actual = isEmpty(ponies)
	t.equal(actual, false)
})


// head

test('head([]) returns Nothing', t => {
	t.plan(2)

	const actual = head([])
	t.equal(actual.inspect(), 'Nothing()')
	actual.fold(
		() => t.pass(),
		() => t.fail()
	)
})

test('head([ 1 ]) returns Just(1)', t => {
	t.plan(2)

	const actual = head([ 1 ])
	t.equal(actual.inspect(), 'Just(1)')
	actual.fold(
		() => t.fail(),
		x => t.equal(x, 1)
	)
})

test('head(ponies) returns Just(Twilight Sparkle)', t => {
	t.plan(2)

	const actual = head(ponies)
	t.equal(actual.inspect(), 'Just(Twilight Sparkle)')
	actual.fold(
		() => t.fail(),
		x => t.equal(x, 'Twilight Sparkle')
	)
})


// tail

test('tail([]) returns Nothing', t => {
	t.plan(2)

	const actual = tail([])
	t.equal(actual.inspect(), 'Nothing()')
	actual.fold(
		() => t.pass(),
		() => t.fail()
	)
})

test('tail([ 1 ]) returns Just(1)', t => {
	t.plan(2)

	const actual = tail([ 1 ])
	t.equal(actual.inspect(), 'Just(1)')
	actual.fold(
		() => t.fail(),
		x => t.equal(x, 1)
	)
})

test('tail(ponies) returns Just(Pinkie Pie)', t => {
	t.plan(2)

	const actual = tail(ponies)
	t.equal(actual.inspect(), 'Just(Pinkie Pie)')
	actual.fold(
		() => t.fail(),
		x => t.equal(x, 'Pinkie Pie')
	)
})
