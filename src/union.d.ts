export as namespace union

export function matcher<T>(type: string): (data: T) => {
	match: (fns: {}) => any
}

export function union(types: [string]): {}
