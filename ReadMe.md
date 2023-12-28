# The Lambda Calculus

In an effort to understand Lambda Calculus, I have created this repository. The goal is to represent Lambda Calculus in JavaScript. Named constants are allowed, but only for human readability. These constants may not be used to achieve recursion. Assertions are used throughout the program to demonstrate correct operation without polluting the output logs. Non-Lambda Calculus code is permitted only to display the state or test the logic of the program.

| Name         | Symbolic Notation                          | Description                                          |
|--------------|--------------------------------------------|------------------------------------------------------|
| Idiot        | `I := λa.a`                                | Returns its argument.                                |
| Mockingbird  | `M := λf.ff`                               | Applies a function to itself.                        |
| Kestrel      | `K := λab.a`                               | Ignores its second argument and returns the first.   |
| Kite         | `KI := λab.b`                              | Ignores its first argument and returns the second.   |
| Bluebird     | `B := λfga.f(ga)`                          | Function composition                                 |
| Blackbird    | `B1 := BBB`                                |                                                      |
| SUCC         | `SUCC := λnfx.f(n f x)`                    | Increments a church numeral                          |
| Z            | `Z := λf.(λx.f(λv.xxv))(λx.f(λv.xxv))`     | Fixed point combinator                               |
| ONE          | `ONE := λfa.fa`                            | Church numeral ONE                                   |
| TWO          | `TWO := λfa.f(fa)`                         | Church numeral TWO                                   |
| THREE        | `THREE := λfa.f(f(fa))`                    | Church numeral THREE                                 |

## Resources

### Gabriel Lebec 
- https://x.com/g_lebec
- https://youtu.be/3VQ382QG-y4
- https://youtu.be/pAnLQ9jwN-E 
- https://github.com/glebec/lambda-talk/tree/master

### Wikipedia
- https://en.wikipedia.org/wiki/Fixed-point_combinator