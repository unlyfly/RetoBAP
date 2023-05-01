# RetoBAP

RetoBap es una API Rest creada para que cumpla las funciones solicitadas en el ejercicio de evaluación de CorporativoBAP.
Las funciones de la api son:

- GET: Regresa la información de todas las tareas capturadas.
- GET: Regresa la información de la tarea seleccionada por su id.
- POST: Ingresa información de una tarea nueva.
- PUT: Edita la información de una tarea, seleccionda por su id.
- DELETE: Elimina una tarea, seleccionada por su id.


## Instalación

Para este proyecto se utilizarón las librerias: Node.js, Express, MongoDB, Mongoose y dotenv.

Para cargar las librerias necesarias en la terminal instalamos npm y lo iniciamos:
```console
npm install
npm run dev
```

*Por motivos de seguridad, se descarto la subida del archivo .env al repositorio, este sera compartido a los interesados por medio de correo electronico.


## Uso

Las solicitudes se hacen a la direccion: **http://localhost:8000/api/Tareas**.

Para los metodos donde requerimos un id como seleccionador, lo obtenemos de un GET y copiamos el _id de la tarea que queremos modificar o eliminar y 
escribimos la direccion de la siguiente forma: **http://localhost:8000/api/Tareas/644ef99b0c08b7a226d0d070**.

Ejemplo de json para registro de una nueva tarea:
```js
{
	"titulo": "Suministro de papel para impresión",
	"descripcion": "Solicitud de compra resmas de papel para impresora",
  "completado": false,
	"fechaEntrega": "2023-05-01",
	"comentarios": "Se realizo la compra de papel, sin embargo se olvido solicitar rollo de papel para el plotter",
	"responsable": "Aylin Ramos",
	"tags": ["oficina", "compras", "suministro"]
}
```
Si se escribe una direccion que no existe, regresara un error 404.


## Contribuciones

Cualquier aporte o comentario para la mejora de esta aplicación sera bien recibido.
