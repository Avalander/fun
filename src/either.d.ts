export as namespace either

export interface Either<L, R> {
	map(fn: (value: R) => R): Either<L, R>
	chain(fn: (value: R) => Either<L, R>): Either<L, R>
	fold(
		fnLeft: (L) => any,
		fnRight: (R) => any
	): any
	inspect(): string
}

export function Left<L, R>(value: L): Either<L, R>

export function Right<L, R>(value: R): Either<L, R>

export function tryCatch<L, R>(fn: () => any, ...args: Array<any>): Either<L, R>

export function conditional<L, R>(fn: (R) => boolean, reason: L): (value: R) => Either<L, R>
