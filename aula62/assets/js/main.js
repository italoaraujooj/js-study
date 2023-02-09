// Escreva uma função chamada ePaisagem que recebe
// dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem

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