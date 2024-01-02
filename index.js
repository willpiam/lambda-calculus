const startTimer = () => {
    const start = Date.now()
    return () => (Date.now() - start) / 1000
}
const timer = startTimer()
const I = a => a                            // Idiot (identity)
const M = f => f(f)                         // Mockingbird  (self-application)

console.assert(M(I) === I, 'The Mocking bird of the Idiot is the Idiot')

const K = a => b => a                      // Kestrel (const)

console.assert(K(I)(M) === I, 'The Kestrel of the Idiot and the Mockingbird is the Idiot')
console.assert(K('first')('second') === 'first', 'The Kestrel returns the first value')
console.assert(K(K)('anything') === K, 'const const applied to anything is const')
console.assert(M(K)('anything') === K, 'Mockingbird applied to the Kestrel gives the Kestrel of the Kestral or "const const" ')

const KI = K(I)                             // Kite (or λab.b)

console.assert(KI(K)(M) === M, 'The Kite of the Kestrel and the Mockingbird is the Mockingbird')
console.assert(KI('first')('second') === 'second', 'The Kite returns the second value')

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
// const show = n => console.log(n)

const B = f => g => a => f(g(a))           // Bluebird (composition)

console.assert(B(NOT)(NOT)(TRUE) === TRUE, 'The Bluebird of NOT and NOT of TRUE is TRUE')

const showNumber = B(console.log)(jsnum)          // display chuch number (using Bluebird/composition)
const ZERO = f => a => a

showNumber(ZERO)


const ONE = f => a => f(a)
showNumber(ONE)

const TWO = f => a => f(f(a))

const SUCC = n => f => a => f(n(f)(a))

console.assert(jsnum(SUCC(ONE)) === 2, 'SUCC(ONE) is 2')

const ADD = n => k => n(SUCC)(k)

const THREE = ADD(ONE)(TWO)
const FIVE = SUCC(ADD(TWO)(TWO))
const SEVEN = ADD(TWO)(FIVE)

console.assert(jsnum(THREE) === 3, 'THREE is 3')
console.assert(jsnum(FIVE) === 5, 'FIVE is 5')
console.assert(jsnum(SEVEN) === 7, 'SEVEN is 7')

const toChurchNumeral = n => eval(`f => a => ${'f('.repeat(n)}a${')'.repeat(n)}`)

{   // Test toChurch
    console.assert(jsnum(toChurchNumeral(0)) === 0, 'toChurch(0) is 0')
    console.assert(jsnum(toChurchNumeral(1)) === 1, 'toChurch(1) is 1')

    console.assert(jsnum(toChurchNumeral(1234)) === 1234, 'toChurch(1234) is 1234')

}

const MULT = B                              // Multiplication is just the composition of chuch numerals

const TEN = MULT(TWO)(FIVE)
const ONE_HUNDRED = MULT(TEN)(TEN)
const ONE_THOUSAND = MULT(TEN)(ONE_HUNDRED)

console.assert(jsnum(TEN) === 10, 'TEN is 10')
console.assert(jsnum(ONE_HUNDRED) === 100, 'ONE_HUNDRED is 100')
console.assert(jsnum(ONE_THOUSAND) === 1000, 'ONE_THOUSAND is 1000')

const Th = a => f => f(a)                  // Thrush (hold an argument)

const POW = Th                             // exponentiation is just the Thrush combinator 

console.assert(jsnum(POW(TWO)(THREE)) === 8, 'TWO to the power of THREE is 8')
console.assert(jsnum(POW(THREE)(TWO)) === 9, 'THREE to the power of TWO is 9')

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

console.assert(V(I)(M)(K) === I, 'The Vireo of the Idiot, the Mockingbird and the Kestrel is the Idiot')
console.assert(V(I)(M)(KI) === M, 'The Vireo of the Idiot, the Mockingbird and the Kite is the Mockingbird')

const FIRST = p => p(K)
const SECOND = p => p(KI)

console.assert(FIRST(V(I)(M)) === I, 'The FIRST of the Vireo of the Idiot and the Mockingbird is the Idiot')
console.assert(SECOND(V(I)(M)) === M, 'The SECOND of the Vireo of the Idiot and the Mockingbird is the Mockingbird')
console.assert(FIRST(V('a')('b')) === 'a', 'The FIRST of the Vireo of "a" and "b" is "a"')
console.assert(SECOND(V('a')('b')) === 'b', 'The SECOND of the Vireo of "a" and "b" is "b"')

const PHI = p => V(SECOND(p))(SUCC(SECOND(p)))

console.assert(jsnum(FIRST(PHI(V(ZERO)(FOUR)))) === 4, 'PHI failed test')
console.assert(jsnum(SECOND(PHI(V(ZERO)(FOUR)))) === 5, 'PHI failed test 2')

const PRED = n => FIRST(n(PHI)(V(ZERO)(ZERO)))

console.assert(jsnum(PRED(ONE)) === 0, 'The predecessor of ONE is ZERO')
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

const GT = B1(NOT)(LEQ)                         // greater than

console.assert(GT(FOUR)(FIVE) === FALSE, 'FOUR is not greater than FIVE')
console.assert(GT(FIVE)(FOUR) === TRUE, 'FIVE is greater than FOUR')
console.assert(GT(FOUR)(FOUR) === FALSE, 'FOUR is not greater than FOUR')

const Z = f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v)))

const pseudoFact = F => n => ISZERO(n)(a => ONE)(a => MULT(n)(F(PRED(n))))(I)
// const pseudoFact = F => n => ISZERO(n)(() => ONE)(() => MULT(n)(F(PRED(n))))() // This also works but it feels weird having a function with no arguments in lambda calculus 
const FAC = Z(pseudoFact)

const TWENTYFOUR = FAC(FOUR)
console.assert(jsnum(TWENTYFOUR) === 24, 'The factorial of FOUR is 24')
showNumber(TWENTYFOUR)

const FIVETHOUSANDFORTY = FAC(SEVEN)
console.assert(jsnum(FIVETHOUSANDFORTY) === 5040, 'The factorial of SEVEN is 5040')
showNumber(FIVETHOUSANDFORTY)

const pseudoSumRange = F => m => n => ISZERO(n)(() => ZERO)(() => ADD(n)(F(m)(PRED(n))))()
const SUMRANGE = Z(pseudoSumRange)

console.assert(EQ(SUMRANGE(ONE)(FOUR))(TEN) === TRUE, 'The sum of the range ONE to FOUR is TEN')

const TWENTYEIGHT = SUMRANGE(ONE)(SEVEN)
showNumber(TWENTYEIGHT)
console.assert(jsnum(TWENTYEIGHT) === 28, 'The sum of the range ONE to SEVEN is 28')

const FIVETHOUSANDFIFTY = SUMRANGE(ONE)(ONE_HUNDRED)
showNumber(FIVETHOUSANDFIFTY)
console.assert(jsnum(FIVETHOUSANDFIFTY) === 5050, 'The sum of the range ONE to ONE_HUNDRED is 5050')

const S = a => b => c => (a(c))(b(c))           // Starling 

{   // The Starling And The Kestrel Sing Some Songs 
    const SK_I = S(K)(K)                                        // The Identity

    console.assert(SK_I(SK_I) === SK_I, 'The Identity of Identity is the Identity')

    const SK_KI = K(SK_I)                                       // The Kite
    console.assert(SK_KI('first')('second') === 'second', 'The Kite returns the second value')

    const SK_M = S(SK_I)(SK_I)                                // The Mockingbird
    console.assert(SK_M(SK_I) === SK_I, 'The Mocking bird of the Idiot is the Idiot')
    console.assert(SK_M(K)('anything') === K, 'Mockingbird applied to the Kestrel gives the Kestrel of the Kestral or "const const" ')

    const SK_V = (S(K((S((S(K((S(K(S)))(K))))(S)))(K(K)))))((S(K(S((S(K))(K)))))(K)) // The Vireo

    console.assert(SK_V(SK_I)(SK_M)(K) === SK_I, 'The Vireo of the Idiot, the Mockingbird and the Kestrel is the Idiot')
    console.assert(SK_V(SK_I)(SK_M)(SK_KI) === SK_M, 'The Vireo of the Idiot, the Mockingbird and the Kite is the Mockingbird')
    console.assert(SK_V('first')('second')(K) === 'first', 'The Kestrel selects the first thing in the Vireo')
    console.assert(SK_V('first')('second')(SK_KI) === 'second', 'The Kite selects the second thing in the Vireo')

    // ... as it turns out, together the Starling and the Kestrel can sing any song --> SK Combinator Calculus
}

const IOTA = f => (f(a => b => c => (a(c))(b(c))))(x => y => x)

{   // Iota can sing any song with itself
    const IOTA_I = IOTA(IOTA)

    console.assert(IOTA_I(IOTA_I) === IOTA_I, 'The Identity of Identity is the Identity')

    const IOTA_K = IOTA(IOTA(IOTA(IOTA)))

    console.assert(IOTA_K('first')('second') === 'first', 'The Kestrel returns the second value')

    const IOTA_KI = IOTA_K(IOTA_I)                                       // The Kite
    console.assert(IOTA_KI('first')('second') === 'second', 'The Kite returns the second value')

    const IOTA_S = IOTA(IOTA(IOTA(IOTA(IOTA))))

    { // The Iota Starling And The Iota Kestrel Sing Some Songs
        const IOTA_SK_I = IOTA_S(IOTA_K)(IOTA_K)                                        // The Identity

        console.assert(IOTA_SK_I(IOTA_SK_I) === IOTA_SK_I, 'The Identity of Identity is the Identity')

        const IOTA_SK_KI = IOTA_K(IOTA_SK_I)                                       // The Kite
        console.assert(IOTA_SK_KI('first')('second') === 'second', 'The Kite returns the second value')
    }
}

// pseudoDiv := λc.λn.λm.λf.λx(λd. IsZero d(0 f x)(f(c d m f x)))(minus n m )
const pseudoDiv = c => n => m => f => x => (d => ISZERO(d)(() => ZERO(f)(x))(() => f(c(d)(m)(f)(x))))(SUB(n)(m))()
const DIVIDE = n => Z(pseudoDiv)(SUCC(n))

console.assert(jsnum(DIVIDE(FOUR)(TWO)) === 2, 'FOUR divided by TWO is TWO')
console.assert(jsnum(DIVIDE(FOUR)(FOUR)) === 1, 'FOUR divided by FOUR is ONE')
console.assert(jsnum(DIVIDE(TEN)(TWO)) === 5, 'TEN divided by TWO is FIVE')
console.assert(jsnum(DIVIDE(TEN)(THREE)) === 3, 'TEN divided by THREE is THREE')
console.assert(jsnum(DIVIDE(ONE_HUNDRED)(TEN)) === 10, 'ONE_HUNDRED divided by TEN is TEN')

const MOD = n => m => SUB(n)(MULT(m)(DIVIDE(n)(m)))

console.assert(jsnum(MOD(FOUR)(TWO)) === 0, 'FOUR mod TWO is ZERO')
console.assert(jsnum(MOD(FOUR)(THREE)) === 1, 'FOUR mod THREE is ONE')
console.assert(jsnum(MOD(TEN)(THREE)) === 1, 'TEN mod THREE is ONE')

const EVEN = n => ISZERO(MOD(n)(TWO))

console.assert(EVEN(ZERO) === TRUE, 'ZERO is even')
console.assert(EVEN(ONE) === FALSE, 'ONE is not even')
console.assert(EVEN(TWO) === TRUE, 'TWO is even')
console.assert(EVEN(FOUR) === TRUE, 'FOUR is even')
console.assert(EVEN(FIVE) === FALSE, 'FIVE is not even')

const ODD = B(NOT)(EVEN)

console.assert(ODD(ZERO) === FALSE, 'ZERO is not odd')
console.assert(ODD(ONE) === TRUE, 'ONE is odd')
console.assert(ODD(ONE_HUNDRED) === FALSE, 'ONE HUNDRED is not odd')

const ONE_HUNDRED_ONE = SUCC(ONE_HUNDRED)

console.assert(ODD(ONE_HUNDRED_ONE) === TRUE, 'ONE HUNDRED ONE is odd')

const pesudoPrime = F => m => n => ISZERO(PRED(m))
        (() => TRUE)
        (
            (ISZERO(MOD(n)(m)))
                (() => FALSE)
                (() => F(PRED(m))(n))
        )()

// const PRIME = n => Z(pesudoPrime)(PRED(n))(n)
const PRIME = n => Z(pesudoPrime)(SUCC(DIVIDE(n)(TWO)))(n)

console.log(PRIME.toString())

const SIX = MULT(TWO)(THREE)
const EIGHT = MULT(TWO)(FOUR)
const ELEVEN = SUCC(TEN)

console.assert(PRIME(FIVE) === TRUE, 'FIVE is prime')
console.assert(PRIME(SIX) === FALSE, 'SIX is not prime')
console.assert(PRIME(SEVEN) === TRUE, 'SEVEN is prime')
console.assert(PRIME(EIGHT) === FALSE, 'EIGHT is not prime')
console.assert(PRIME(NINE) === FALSE, 'NINE is not prime')
console.assert(PRIME(TEN) === FALSE, 'TEN is not prime')
console.assert(PRIME(ELEVEN) === TRUE, 'ELEVEN is prime')

const ONE_HUNDRED_SEVENTY_THREE = ADD(ADD(ONE_HUNDRED)(MULT(TEN)(SEVEN)))(THREE)
showNumber(ONE_HUNDRED_SEVENTY_THREE)

console.log(`Elapsed time: ${timer()}s`) 

console.assert(PRIME(ONE_HUNDRED_SEVENTY_THREE) === TRUE, 'ONE_HUNDRED_SEVENTY_THREE is prime')

console.log(`Elapsed time: ${timer()}s`) 