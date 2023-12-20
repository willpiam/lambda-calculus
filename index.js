
const I = a => a                            // Idiot (identity)
const M = f => f(f)                         // Mockingbird  (self-application)

console.assert(M(I) === I, 'The Mocking bird of the Idiot is the Idiot') 

const ONE = f => a => f(a)

const SUCC = n => f => a => f(n(f)(a))

const jsnum = n => n(x => x + 1)(0)
const show = n => console.log(n)

show(jsnum(SUCC(ONE)))
