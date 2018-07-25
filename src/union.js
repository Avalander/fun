module.exports.union = types =>
    types.reduce((prev, type) => ({
        ...prev,
        [type]: data => ({
            match: fns => fns[type](data),
        }),
	}), {})

module.exports.matcher = type => data =>
	({
		match: fns => fns[type](data)
	})
