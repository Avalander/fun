module.exports.exists = value =>
	value != null

module.exports.pipe = (...fns) => value =>
	fns.reduce(
		(prev, fn) => fn(prev),
		value 
	)

module.exports.compose = (...fns) => value =>
	fns.reduceRight(
		(prev, fn) => fn(prev),
		value
	)
