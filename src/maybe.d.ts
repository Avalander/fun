export as namespace maybe

export interface Maybe<T> {
	map(fn: (value: T) => T): Maybe<T>
	chain(fn: (value: T) => Maybe<T>): Maybe<T>
	fold(
		fnLeft: () => any,
		fnRight: (T) => any
	): any
	inspect(): string
}

export function Just<T>(value: T): Maybe<T>

export function Nothing(): Maybe<any>

export function fromNullable<T>(value: T): Maybe<T>

export function fromList<T extends Array<any>>(value: T): Maybe<T>
