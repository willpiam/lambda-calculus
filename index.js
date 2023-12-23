
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
const ZERO = f => a => a                

showNumber(ZERO)

const ONE = f => a => f(a)
showNumber(ONE)

const TWO = f => a => f(f(a))

const SUCC = n => f => a => f(n(f)(a))

showNumber(
    SUCC(ONE)
)

const ADD = n => k => n(SUCC)(k)

const THREE = ADD(ONE)(TWO)
const FIVE = SUCC(ADD(TWO)(TWO))
const SEVEN = ADD(TWO)(FIVE) 

console.assert(jsnum(THREE) === 3, 'THREE is 3')
console.assert(jsnum(FIVE) === 5, 'FIVE is 5')
console.assert(jsnum(SEVEN) === 7, 'SEVEN is 7')

const MULT = B                              // Multiplication is just the composition of chuch numerals

const TEN = MULT(TWO)(FIVE)
const ONE_HUNDRED = MULT(TEN)(TEN)
const ONE_THOUSAND = MULT(TEN)(ONE_HUNDRED)

console.assert(jsnum(TEN) === 10, 'TEN is 10')
console.assert(jsnum(ONE_HUNDRED) === 100, 'ONE_HUNDRED is 100')
console.assert(jsnum(ONE_THOUSAND) === 1000, 'ONE_THOUSAND is 1000')

const Th = a => f => f(a)                  // Thrush (hold an argument)

const POW = Th                             // exponentiation is just the Thrush combinator 

const FOUR = POW(TWO)(TWO)

console.assert(jsnum(FOUR) === 4, 'FOUR is 4')
showNumber(FOUR)

const NINE = POW(THREE)(TWO)

console.assert(jsnum(NINE) === 9, 'NINE is 9')
showNumber(NINE)

const ISZERO = n => n(K(FALSE))(TRUE)       // zero is false. if N is zero it picks TRUE, Otherwise it gives the kestrel of false 

console.assert(ISZERO(FALSE) === TRUE, 'False should be zero')
console.assert(ISZERO(ZERO) === TRUE, 'Zero should be zero')
console.assert(ISZERO(ONE) === FALSE, 'One should not be zero')
console.assert(ISZERO(TWO) === FALSE, 'Two should not be zero')
console.assert(ISZERO(FOUR) === FALSE, 'FOUR should not be zero')

const V = a => b => f => f(a)(b)           // Vireo (pair // closures) ... a data structure

console.assert(V(I)(M) (K) === I, 'The Vireo of the Idiot, the Mockingbird and the Kestrel is the Idiot')
console.assert(V(I)(M) (KI) === M, 'The Vireo of the Idiot, the Mockingbird and the Kite is the Mockingbird')

const FIRST = p => p(K)                    
const SECOND = p => p(KI)

console.assert(FIRST(V(I)(M)) === I, 'The FIRST of the Vireo of the Idiot and the Mockingbird is the Idiot')
console.assert(SECOND(V(I)(M)) === M, 'The SECOND of the Vireo of the Idiot and the Mockingbird is the Mockingbird')

const PHI = p => V (SECOND(p)) (SUCC(SECOND(p)))

console.assert(jsnum(FIRST(PHI(V(ZERO)(FOUR)))) === 4, 'PHI failed test')
console.assert(jsnum(SECOND(PHI(V(ZERO)(FOUR)))) === 5, 'PHI failed test 2')

const PRED = n => FIRST(n(PHI)(V(ZERO)(ZERO)))

console.assert(jsnum(PRED(FOUR)) === 3, 'The predecessor of FOUR is THREE')
console.assert(jsnum(PRED(PRED(FOUR))) === 2, 'The predecessor of the predecessor of FOUR is TWO')

const SUB = n => k => k(PRED)(n)

console.assert(jsnum(SUB(FOUR)(TWO)) === 2, 'FOUR minus TWO is TWO')
console.assert(jsnum(SUB(FOUR)(FOUR)) === 0, 'FOUR minus FOUR is ZERO')

const LEQ = n => k => ISZERO(SUB(n)(k))         // less than or equal to

console.assert(LEQ(FOUR)(FIVE) === TRUE, 'FOUR is less than or equal to FIVE')
console.assert(LEQ(FOUR)(FOUR) === TRUE, 'FOUR is less than or equal to FOUR')
console.assert(LEQ(FIVE)(FOUR) === FALSE, 'FIVE is not less than or equal to FOUR')

const EQ = n => k => AND(LEQ(n)(k))(LEQ(k)(n))  // equallity

console.assert(EQ(FOUR)(FOUR) === TRUE, 'FOUR is equal to FOUR')
console.assert(EQ(TEN)(SUCC(NINE)) === TRUE, 'TEN is equal to SUCC(NINE)')
console.assert(EQ(FOUR)(FIVE) === FALSE, 'FOUR is not equal to FIVE')

const B1 = B(B)(B)                              // Blackbird (composition combinator)

const GT = B1 (NOT) (LEQ)                       // greater than

console.assert(GT(FOUR)(FIVE) === FALSE, 'FOUR is not greater than FIVE')
console.assert(GT(FIVE)(FOUR) === TRUE, 'FIVE is greater than FOUR')
console.assert(GT(FOUR)(FOUR) === FALSE, 'FOUR is not greater than FOUR')

// FACTORIAL via the Z combinator
const IF = c => t => f => c(t)(f)              // IF combinator

const Z = f => (x => f(y => x(x)(y))) (x => f(y => x(x)(y)))

const FACT = Z(f => n => IF(LEQ(n)(ONE))(ONE)(MULT(n)(f(PRED(n)))))

console.assert(jsnum(FACT(FOUR)) === 24, 'The factorial of FOUR is 24')