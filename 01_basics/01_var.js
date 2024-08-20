const accountId = 123
let accountEmail = "asdf@gmail.com"
var accountPass = 1007
accountCity = "Imphal"
let accountState    // in js if we don't assigned the value of a variable then it will read as "undefined"

// accountId = 2    // constant variable cannot be changed/reassigned

/*
    variable can be reassigned using keyword "let" and "var"
    "let" - reassigned only within the block scope
    "var" - reassigned as global variable   [highly not recommended to avoid any errors with same variable name]
*/

accountEmail = "qwerty@gmail.com"
accountPass = 567
accountCity = "Belgaum"

// console.log(accountId)

console.table([accountId, accountEmail, accountPass, accountCity, accountState])
