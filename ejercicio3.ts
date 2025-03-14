function filtrar<T>(arreglo: T[], criterio: (item: T) => boolean): T[] {
    let resultado: T[] = []; 

    arreglo.forEach(item => {
        if (criterio(item)) {
            resultado.push(item);
        }
    });
 
    return resultado;
}

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numerosPares = filtrar(numero, (n) => n % 2 === 0);
console.log(numerosPares); 
