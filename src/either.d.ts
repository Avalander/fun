export as namespace either

type EitherMap<R> = (value: R) => R
type EitherChain<L, R> = (value: R) => Either<L, R>

export interface Either<L, R> {
	map(fn: EitherMap<R>): Either<L, R>
	chain(fn: EitherChain<L, R>): Either<L, R>
	fold(
		fnLeft: (L) => any,
		fnRight: (R) => any
	): any
	inspect(): string
}

export function Left<L, R>(value: L): Either<L, R>

export function Right<L, R>(value: R): Either<L, R>

export function tryCatch<L, R>(fn: () => any, ...args: []): Either<L, R>

export function conditional<L, R>(fn: (R) => boolean, reason: L): (value: R) => Either<L, R>
