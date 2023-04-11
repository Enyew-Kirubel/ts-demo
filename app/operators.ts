//  keyof
interface SomeRandomObject {
    propJuan: string;
    propToo: number;
}

type KeyofRandomObject = keyof SomeRandomObject // "propJuan" | "propToo"

// Indexed access
type IndexAccessRandomObject = SomeRandomObject['propJuan' | 'propToo']

type Indexes = "propJuan" | 'propToo'
type IndexAccess2 = SomeRandomObject[Indexes]

type IndexAccess3 = SomeRandomObject[keyof SomeRandomObject]

// const index = "propJuan"
// type InvalidIndexAccess = SomeRandomObject[index]

// mapped types

// type PartialRadom = Partial<SomeRandomObject>

type WhatPartialDoes<Type> = {
    [property in keyof Type]?: Type[property]
}