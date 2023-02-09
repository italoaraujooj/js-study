// aprendendo try catch

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError('x e y precisam ser números.');
        // tem varios tipos de Error
    }
    return x+y;
}

try {
    console.log(soma(1,2));
    console.log(soma('1', 2));
} catch(error){
    console.log(error);
    // console.log('alguma coisa mais amigavel');
}