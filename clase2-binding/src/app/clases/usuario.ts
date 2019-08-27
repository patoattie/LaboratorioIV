export class Usuario
{
    public nombre:string;
    public clave:string;
    public error:boolean;
    public ok:boolean;

    constructor(nombre:string, clave:string)
    {
        this.nombre = nombre;
        this.clave = clave;
        this.error = false;
        this.ok = false;
    }
}
