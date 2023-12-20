
const I = a => a                            // Idiot (identity)
const M = f => f(f)                         // Mockingbird  (self-application)

console.assert(M(I) === I, 'The Mocking bird of the Idiot is the Idiot') 

const K = a => b => a                      // Kestrel (const)

console.assert(K(I)(M) === I, 'The Kestrel of the Idiot and the Mockingbird is the Idiot')

const KI = K(I)                             // Kite (or λab.b)

console.assert(KI(K)(M) === M, 'The Kite of the Mockingbird is the Mockingbird')

const C = f => a => b => f(b)(a)           // Cardinal (flip)

console.assert(C(K)(I)(M) === M, 'The Cardinal of the Kestrel, the Idiot and the Mockingbird is the Mockingbird')

const ONE = f => a => f(a)

const SUCC = n => f => a => f(n(f)(a))

const jsnum = n => n(x => x + 1)(0)
const show = n => console.log(n)

show(jsnum(SUCC(ONE)))
