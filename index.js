/*1*/
const Coche = { marca: "", modelo: "", matricula: "" }

/*2*/
const Casa = { codPostal: "", calle: "", portal: "", piso: "" }

/*3*/
const FullStackDeveloper = { lenguajes: [], proyectos: [] }

/*4*/
const Perro = {
    nombre: "",
    raza: "",
    color: "",
    edad: "",
    ladrar: function ladrar() {
        console.log("guau")
    },
    popo: function popo() {
        return Math.random() * 3
    }
}

/*5*/
const marcaPortatil = Portatil.marca

/*6*/
const marcaPortatil2 = Portatil["marca"]

/*7*/
const grupos = Concierto["grupos"]

/*8*/
const RGB = []
RGB[0] = Led.rojo
RGB[1] = Led.verde
RGB[2] = Led.azul
console.log(RGB)
/*9*/
Portatil["modelo"] = "P345"

/*10*/
Concierto["cartelera"].push("Guns N' Roses")

/*11*/
Concierto["fecha"] = new Date()

/*12*/
Impresora["imprimiendo"] = { NombreArchivo: "", copias: "", numPaginas: "" }

/*13*/
Noticia = { titular: "", cuerpo: "" }

/*14*/
const Persona = { nombre: "", apellidos: "", edad: "" }

/*15*/
const Avion = {
    numPasajeros: "",
    despegar: function despegar() {
        console.log("despegando");
    },
    volar: function volar() {
        console.log("llegando al destino")

    },
    aterrizar: function aterrizar() {
        console.log("aterrizando")
    }
}

/*16*/
Paquete = { contenido: [] }

/*17*/
const Pais = { numHabitantes: "", continente: "", gentilicio: "" }

/*18*/
const codError = O_Error.codigo

/*19*/
const integrantes = Grupo.integrantes

/*20*/

nivelesTinta = Impresora.tinta

/*21*/
const pixeles = Pantalla.pixeles

/*22*/
const especificaciones = Movil["especificaciones"]

/*23*/
Grupo["numIntegrantes"] = 5

/*24*/
Pantalla["dimensiones"] = "1920x1080"

/*25*/

Led.encendido = !Led.encendido

/*26*/
Movil.temperatura = "20º"





