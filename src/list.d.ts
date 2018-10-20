import { Maybe } from './maybe'


export as namespace list

export function isEmpty(value: []): boolean

export function head(value: T[]): Maybe<T>

export function tail(value: T[]): Maybe<T>
