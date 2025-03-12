interface Recargable {
    recargar(): void; 
}

interface Disparable {
    disparar(): void;  
}


class PistolaLaser implements Recargable, Disparable {
    private carga: number = 0;  

    
    recargar(): void {
        this.carga = 100;  
        console.log("Pistola recargada. Carga al 100%");
    }

   
    disparar(): void {
        if (this.carga > 0) {
            this.carga -= 10; 
            console.log("disparo exitoso, carga restante: " + this.carga + "%");
        } else {
            console.log("No hay suficiente carga, necesitas recargar.");
        }
    }
}


const miPistola = new PistolaLaser();


miPistola.recargar(); 
miPistola.disparar();  
miPistola.disparar();  
miPistola.recargar();  
miPistola.disparar();  

