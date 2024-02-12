# The Lambda Calculus

In an effort to understand Lambda Calculus, I have created this repository. The goal is to represent Lambda Calculus in JavaScript. Named constants are allowed, but only for human readability. These constants may not be used to achieve recursion. Assertions are used throughout the program to demonstrate correct operation without polluting the output logs. Non-Lambda Calculus code is permitted only to display the state or test the logic of the program.

| Name           | Symbolic Notation              | Description                                          |
|----------------|--------------------------------|------------------------------------------------------|
| Idiot            | `I := λa.a`                  | Returns its argument.                                |
| Mockingbird      | `M := λf.ff`                 | Applies a function to itself.                        |
| Kestrel / True   | `K := λab.a`                 | Ignores its second argument and returns the first.   |
| Kite / False     | `KI := λab.b`                | Ignores its first argument and returns the second.   |
| Cardinal         | `C := λfab.fba`              | Flip                                                 |
| Not              | `NOT := λp.p KI K`           | Logical Negation                                     |
| And              | `AND := λpq.pqp`             | Logical And                                          |
| Or               | `OR := λpq.ppq`              | Logical Or                                           |
| Boolean Equality | `BEQ := λpq.pq (NOT q)`      | Boolean Equality                                     |
| Bluebird         | `B := λfga.f(ga)`            | Function composition                                 |
| Zero             | `ZERO := λfa.a`              | Church numeral ZERO                                  |
| Blackbird        | `B1 := BBB`                  |                                                      |
| SUCC             | `SUCC := λnfx.f(n f x)`      | Increments a church numeral                          |
| ADD              | `ADD := λnk.n (SUCC) k`      | Adds two church numerals                             |
| Mult             | `MUL := B`                   | Multiply two church numerals                         |  
| Thrush           | `Th := λaf.fa `              |                                                      |
| Pow              | `POW := Th`                  | Raise one church numeral to the power of another     |
| Z                | `Z := λf.(λx.f(λv.xxv))(λx.f(λv.xxv))`     | Fixed point combinator                 |
| ONE              | `ONE := λfa.fa`                            | Church numeral ONE                     |
| TWO              | `TWO := λfa.f(fa)`                         | Church numeral TWO                     |
| THREE            | `THREE := λfa.f(f(fa))`                    | Church numeral THREE                   |
| IsZero           | `ISZERO := λn.n(K KI)K`                    | Check whether a church numeral is zero |
| Vireo            | `V := λabf.fab`                            | A pair. The simplest data structure    |
| First            | `FST := λp.p K`                            | Get the first value of a pair          |
| Second           | `SND := λp.p KI`                           | Get the second value of a pair         |
| Phi              | `PHI := λp.`                      |                                                      |
| Pred             | ``                      | Decrement a church numeral                           |
| Sub              | ``                      | Subtract one chuch numeral from another              |
| LEQ              | ``                      | Less than or equal to                                |
| Equality         | ``                      | Equality of two church numerals                      |
| GT               | ``                      | Greater Than                                         |
| Factorial        | `` |                                                      |
| SumRange         | ``                      |                                                      |
| Starling         | `S := λabc.ac(bc)`                         |                                                      |
| Iota             | `IOTA := λf.(f λabc.ac(bc))λxy.x`          | |
| Division         | ``               | Division using Church numerals             |
| Modulus          | ``               | Modulus using Church numerals              |
| Even             | ``               | Is a given church numeral even?            |
| Odd              | ``               | Is a given church numeral odd?             |
| Prime            | ``               | Is a given church numeral prime?           |

## Resources

### Gabriel Lebec 

Please watch Gabriel's fantastic presentation *A Flock Of Functions* which served as inspiration and as a starting point for this project.

- [@g_lebec on 𝕏](https://x.com/g_lebec)
- [Part One - Fullstack Academy](https://youtu.be/3VQ382QG-y4)
- [Part Two](https://youtu.be/pAnLQ9jwN-E) 
- [A Flock Of Functions - GitHub](https://github.com/glebec/lambda-talk/tree/master)
- [Vireo in SK Combinator Calculus](https://speakerdeck.com/glebec/lambda-calc-talk-smartly-dot-io-version?slide=197)

### Wikipedia
- [Fixed-point Combinator](https://en.wikipedia.org/wiki/Fixed-point_combinator)
- [SKI Combinator Calculus](https://en.wikipedia.org/wiki/SKI_combinator_calculus)
- [Division with Church Numerals](https://en.wikipedia.org/wiki/Church_encoding#Division)

## Issues And Corrections

If you find anything wrong with this project (*including this ReadMe*) please open an issue and I will address it promptly. 

## Running the program

Run the program with nodejs

    node index.js

## JavaScript Helpers

| Name              | Description             |
|-------------------|-------------------------|
| startTimer        | Time code execution                                               |
| jsnum             | Convert a Church numeral to a JavaScript number                   |
| showNumber        | Convert from a Church numeral and print                           |
| toChurchNumeral   | Build a Church numeral equal to the provided JavaScript number    |

## Things To Do

- [ ] Create a list to hold chuch numerals

## Me

Follow my on 𝕏  [@william00000010](https://x.com/william00000010)

Cardano --> [$wildoy](https://handle.me/wildoy)

ENS --> [williamdoyle.eth](https://app.ens.domains/williamdoyle.eth)

Finally visit [projects.williamdoyle.ca](https://projects.williamdoyle.ca/) to explore my other projects. 
