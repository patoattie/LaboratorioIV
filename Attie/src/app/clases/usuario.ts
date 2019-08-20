export class Usuario
{
    private titulo:string;

    constructor(titulo:string)
    {
        this.titulo = titulo;
    }

    public getTitulo():string
    {
        return this.titulo;
    }
}
