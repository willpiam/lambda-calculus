
const I = a => a                            // Idiot (identity)
const M = f => f(f)                         // Mockingbird  (self-application)

console.assert(M(I) === I, 'The Mocking bird of the Idiot is the Idiot')

const K = a => b => a                      // Kestrel (const)

console.assert(K(I)(M) === I, 'The Kestrel of the Idiot and the Mockingbird is the Idiot')

const KI = K(I)                             // Kite (or λab.b)

console.assert(KI(K)(M) === M, 'The Kite of the Mockingbird is the Mockingbird')

const C = f => a => b => f(b)(a)           // Cardinal (flip)

console.assert(C(K)(I)(M) === M, 'The Cardinal of the Kestrel, the Idiot and the Mockingbird is the Mockingbird')

const TRUE = K
const FALSE = KI
TRUE.inspect = () => 'TRUE [K]'
FALSE.inspect = () => 'FALSE [KI]'

const NOT = p => p(FALSE)(TRUE)

console.assert(NOT(TRUE) === FALSE, 'The NOT of TRUE is FALSE')
console.assert(NOT(FALSE) === TRUE, 'The NOT of FALSE is TRUE')
console.assert(NOT(TRUE)('a')('b') === C(TRUE)('a')('b'), 'NOT and Cardinal are the same') // Not and Cardinal are the same

const AND = p => q => p(q)(p)

console.assert(AND(TRUE)(TRUE) === TRUE, 'The AND of TRUE and TRUE is TRUE')
console.assert(AND(FALSE)(TRUE) === FALSE, 'The AND of FALSE and TRUE is FALSE')
console.assert(AND(TRUE)(FALSE) === FALSE, 'The AND of TRUE and FALSE is FALSE')
console.assert(AND(FALSE)(FALSE) === FALSE, 'The AND of FALSE and FALSE is FALSE')

const OR = p => q => p(p)(q)                // Mockingbird once removed

console.assert(OR(TRUE)(TRUE) === TRUE, 'The OR of TRUE and TRUE is TRUE')
console.assert(OR(FALSE)(TRUE) === TRUE, 'The OR of FALSE and TRUE is TRUE')
console.assert(OR(TRUE)(FALSE) === TRUE, 'The OR of TRUE and FALSE is TRUE')
console.assert(OR(FALSE)(FALSE) === FALSE, 'The OR of FALSE and FALSE is FALSE')

const BEQ = p => q => p(q)(NOT(q))          // Boolean Equality

console.assert(BEQ(TRUE)(TRUE) === TRUE, 'The BEQ of TRUE and TRUE is TRUE')
console.assert(BEQ(FALSE)(TRUE) === FALSE, 'The BEQ of FALSE and TRUE is FALSE')
console.assert(BEQ(TRUE)(FALSE) === FALSE, 'The BEQ of TRUE and FALSE is FALSE')
console.assert(BEQ(FALSE)(FALSE) === TRUE, 'The BEQ of FALSE and FALSE is TRUE')

const jsnum = n => n(x => x + 1)(0)
const show = n => console.log(n)

const B = f => g => a => f(g(a))           // Bluebird (composition)

const showNumber = B(show)(jsnum)          // display chuch number (using Bluebird/composition)

const ONE = f => a => f(a)
showNumber(ONE)

const TWO = f => a => f(f(a))

const SUCC = n => f => a => f(n(f)(a))

showNumber(
    SUCC(ONE)
)

const ADD = n => k => n(SUCC)(k)

showNumber(
    ADD(ONE)(TWO)
)

const FIVE = SUCC(ADD(TWO)(TWO))
const SEVEN = ADD(TWO)(FIVE) 

showNumber(FIVE)
showNumber(SEVEN)