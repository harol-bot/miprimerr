interface Transporte {
    capacidad: number;  
}

interface Avion extends Transporte {
    altitudMaxima: number;  
}


class AvionComercial implements Avion {
    capacidad: number;
    altitudMaxima: number;

    constructor(capacidad: number, altitudMaxima: number) {
        this.capacidad = capacidad;
        this.altitudMaxima = altitudMaxima;
    }

   
    mostrarInfo(): void {
        console.log(`Capacidad del avión: ${this.capacidad} pasajeros`);
        console.log(`Altitud máxima: ${this.altitudMaxima} metros`);
    }
}


const avion1 = new AvionComercial(180, 12000);

avion1.mostrarInfo();

