interface Par<T, U> {
    primero: T;
    segundo: U;
}

function concatenarValores<T, U>(par: Par<T, U>): string {
    return `${par.primero} ${par.segundo}`;
}


const par1: Par<string, number> = { primero: "capote", segundo: 123 };
console.log(concatenarValores(par1)); 
