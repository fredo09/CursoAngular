export class Alumno {
    // Atributos
    public id: number;
    public nombre: String;
    public apellido: String;
    public ciudad: String;

    constructor(id: number, nombre: String, apellido: String, ciudad: String ) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.ciudad = ciudad;
    }
}
