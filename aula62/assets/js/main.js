// Escreva uma função que testa se o numero é divisivel por 3 e 5 etc

const FizzBuzz = (num) => {
    if (typeof(num) !== 'number') return num;
    saida = "";
    if (num % 3 == 0) saida += "Fizz";
    if (num % 5 == 0) saida += "Buzz";
    if (saida != "") return saida;
    else return num;
};

for (let num = 1; num < 100; num++) {
    console.log(num, FizzBuzz(num));
}