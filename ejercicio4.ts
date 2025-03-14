class Repositorio<T> {
    public elementos: T[] = [];
    agregar(elemento: T): void {
        this.elementos.push(elemento); 
    }

    obtenerPorIndice(indice: number): T | undefined {
        if (indice >= 0 && indice < this.elementos.length) {
            return this.elementos[indice]; 
        }
        return undefined; 
    }

    eliminarPorIndice(indice: number): void {
        if (indice >= 0 && indice < this.elementos.length) {
            this.elementos.splice(indice, 1); 
        } else {
            console.log("Índice fuera de rango"); 
        }
    }
}

const repositorioNumeros = new Repositorio<number>(); 
repositorioNumeros.agregar(10); 
repositorioNumeros.agregar(30); 

console.log(repositorioNumeros.obtenerPorIndice(0)); 
console.log(repositorioNumeros.obtenerPorIndice(1)); 
console.log(repositorioNumeros.obtenerPorIndice(2)); 
console.log(repositorioNumeros.obtenerPorIndice(3));


repositorioNumeros.eliminarPorIndice(1);
console.log(repositorioNumeros.obtenerPorIndice(1)); 


repositorioNumeros.eliminarPorIndice(5); 
