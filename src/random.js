const oneIftrue = value =>
	(value
		? 1
		: 0
	)

const randInt = (start, end, closed = false) =>
	Math.floor(Math.random() * (end - start + oneIftrue(closed))) + start

module.exports.randInt = randInt

module.exports.choose = options =>
	options[randInt(0, options.length)]
