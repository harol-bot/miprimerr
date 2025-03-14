function reversa<T>(arreglo: T[]): T[] {
    let resultado: T[] = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        resultado.push(arreglo[i]);
    }
    return resultado;
}

const numeros = [1, 2, 3, 4, 5];
const numerosInvertidos = reversa(numeros);
console.log(numerosInvertidos); 
