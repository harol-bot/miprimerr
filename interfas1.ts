interface Pelicula {
    titulo: string;
    director: string;
    añoEstreno?: number;  
}

class PeliculaClass implements Pelicula {
    titulo: string;
    director: string;
    añoEstreno?: number;

    constructor(titulo: string, director: string, añoEstreno?: number) {
        this.titulo = titulo;
        this.director = director;
        this.añoEstreno = añoEstreno;
    }

    mostrarInfo(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Director: ${this.director}`);
        
        if (this.añoEstreno) {
            console.log(`Año de estreno: ${this.añoEstreno}`);
        } else {
            console.log("Año de estreno: No disponible");
        }
    }
}


const pelicula1 = new PeliculaClass("Inception", "Christopher Nolan", 2010);
const pelicula2 = new PeliculaClass("The Matrix", "Lana Wachowski, Lilly Wachowski");

pelicula1.mostrarInfo();  
pelicula2.mostrarInfo();  



