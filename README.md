# RetoBAP

RetoBap es una API Rest creada para que cumpla las funciones solicitadad en el ejercicio de evaluacion de CorporativoBAP
Cuenta con las siguientes solicitudes:

- GET: Regresa la informacion de todas las tareas capturadas.
- GET: Regresa la informacion de la tarea seleccionada por su id.
- POST: Ingresa informacion de una tarea nueva.
- PUT: Edita la informacion de una tarea, seleccionda por su id.
- DELETE: Elimina una tarea, seleccionada por su id.


## Instalacion

Se utilizaron las siguientes librerias: node.js Express, MongoDB, Mongoose y dotenv.

*Por motivos de seguridad, se descarto la subida del archivo .env al repositorio, este sera compartido a los interesados por medio de correo electronico.


## Uso

Las solicitudes se hacen a la direccion: **http://localhost:8000/api/Tareas**.

Para los metodos donde requerimos un id como seleccionador, lo obtenemos de un GET y copiamos el _id de la tarea que queremos modificar o eliminar y 
escribimos la direccion de la siguiente forma: **http://localhost:8000/api/Tareas/644ef99b0c08b7a226d0d070**.

Ejemplo de json para registro de una nueva tarea:
```js
{
	"titulo": "Suministro de papel para impresion",
	"descripcion": "Solicitud de compra resmas de papel para impresora",
  "completado": False,
	"fechaEntrega": "2023-05-01",
	"comentarios": "Se realizo la compra de papel, sin embargo se olvido solicitar rollo de papel para el plotter",
	"responsable": "Aylin Ramos",
	"tags": ["oficina", "compras", "suministro"]
}
```
Si se escribe una direccion que no existe, regresara un error 404.


## Contribuciones

Cualquier aporte para la mejora de esta aplicacion sera bien recibido.
