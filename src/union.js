module.exports.union = types =>
    types.reduce((prev, type) =>
        Object.assign({},
            prev,
            { [type]: data =>
                ({
                    match: fns => fns[type](data),
                }),
            }
        ), {})

module.exports.matcher = type => data =>
	({
		match: fns => fns[type](data)
	})
