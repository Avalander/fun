export as namespace maybe

type MaybeMap<T> = (T) => T
type MaybeChain<T> = (T) => Maybe<T>

export interface Maybe<T> {
	map(fn: MaybeMap<T>): Maybe<T>
	chain(fn: MaybeChain<T>): Maybe<T>
	fold(
		fnLeft: () => any,
		fnRight: (T) => any
	): any
	inspect(): string
}

export function Just<T>(value: T): Maybe<T>

export function Nothing(): Maybe<any>

export function fromNullable<T>(value: T): Maybe<T>

export function fromList<T extends []>(value: T): Maybe<T>
