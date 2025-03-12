interface Dispositivo {
    nombre: string; 
}

interface Smartphone extends Dispositivo {
    tienePantallaTactil: boolean;  
}

class MiSmartphone implements Smartphone {
    nombre: string;
    tienePantallaTactil: boolean;

    constructor(nombre: string, tienePantallaTactil: boolean) {
        this.nombre = nombre;
        this.tienePantallaTactil = tienePantallaTactil;
    }

   
    mostrarInfo(): void {
        console.log(`nombre del dispositivo: ${this.nombre}`);
        console.log(`tiene pantalla tctil: ${this.tienePantallaTactil ? "Sí" : "No"}`);
    }
}


const miTelefono = new MiSmartphone("Samsung Galaxy S21", true);
miTelefono.mostrarInfo();
