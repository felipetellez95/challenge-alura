<h1> Challenge "sorteo de amigo secreto" Alura Latam </h1>

# Sorteo de amigos secretos

Este es un proyecto simple en JavaScript que permite realizar un sorteo de "amigos secretos". Los usuarios pueden agregar amigos a una lista y luego sortear un amigo secreto para cada uno. Si todos los amigos han sido sorteados, se notificará al usuario.

## Características

- **Agregar amigos**: Los usuarios pueden agregar amigos a una lista.
- **Mostrar lista de amigos**: Los amigos agregados se muestran en una lista en la interfaz.
- **Sorteo de amigos secretos**: El sistema asigna aleatoriamente un amigo secreto a cada persona, asegurando que cada amigo reciba a alguien diferente.
- **Verificación de errores**: El sistema muestra mensajes de advertencia si los usuarios intentan sortear sin haber agregado suficientes amigos o si ya se han sorteado todos los amigos.

## Requisitos

Este proyecto utiliza solo tecnologías web básicas y no requiere bibliotecas externas. Los requisitos son:

- Un navegador web moderno (como Chrome, Firefox, Safari, etc.).

## Instalación

## Uso
### Agregar un amigo
1. Escribe el nombre de un amigo en el campo de texto.
2. Haz clic en el botón Agregar Amigo.
3. El nombre se añadirá a la lista de amigos y se mostrará en la interfaz.
### Realizar el sorteo
1. Después de agregar al menos dos amigos, haz clic en el botón Sortear.
2. El sistema asignará aleatoriamente un amigo secreto a cada amigo y lo mostrará en la pantalla.
### Errores y advertencias
- Si intentas realizar un sorteo sin haber agregado amigos, se mostrará un mensaje pidiendo que agregues al menos un amigo.
- Si intentas hacer un sorteo con solo un amigo en la lista, el sistema notificará que se necesitan al menos dos amigos.
- Si todos los amigos ya han sido sorteados, se notificará que ya no hay más amigos por sortear.
## Estructura del proyecto
El proyecto está compuesto por los siguientes archivos:
- index.html: 
Este archivo contiene la estructura básica de la página, incluyendo los campos de entrada, botones y listas para mostrar los amigos y resultados.
- style.css: 
Archivo de estilos para dar formato y diseño a la interfaz de usuario.
- script.js: 
Contiene la lógica para agregar amigos, mostrar la lista de amigos y realizar el sorteo de amigos secretos.

## Mejoras posibles
- Prevención de duplicados: Actualmente, se puede agregar el mismo amigo varias veces. Se puede agregar una verificación para evitar duplicados.
- Asignación única de amigo secreto: Se puede mejorar la lógica para asegurar que cada amigo tenga un único amigo secreto.
- Feedback visual: Se puede mejorar la interfaz mostrando mensajes de error dentro de la página en lugar de usar alert().

## Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
