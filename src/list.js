const { Just, Nothing } = require('./maybe')


const isEmpty = list =>
	list.length === 0

module.exports.isEmpty = isEmpty

module.exports.head = list => {
	if (!Array.isArray(list)) {
		throw new TypeError(`head expected array but found type ${typeof list}`)
	}
	return (isEmpty(list)
		? Nothing()
		: Just(list[0])
	)
}

module.exports.tail = list => {
	if (!Array.isArray(list)) {
		throw new TypeError(`tail expected array but found type ${typeof list}`)
	}
	return (isEmpty(list)
		? Nothing()
		: Just(list[list.length - 1])
	)
}
