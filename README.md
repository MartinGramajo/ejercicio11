# Proyecto en React - Consumiendo API

En este proyecto lo que hicimos fue crear una app que muestra por pantalla una lista de noticias, consumiendo la API **https://newsdata.io/**.

La App cuenta con 2 selectores uno por categorías y el otro por país, los cuales al ser elegidos por el usuario nos traen los datos mostrando por pantalla en una lista de noticias relacionada con la elección.

Cada una de las noticias esta trabajada de forma tal que el background de la card cambia de color dependiendo de la categoría de la noticia.

Ademas en caso de no existir ningún tipo de noticia relacionada con la categoría, país o ambas por el usuario
se muestra una card por pantalla con el mensaje:

> 'No hay noticias relacionadas con esa categoría o país. Por favor intenta con otra categoría o país!'

## Extra 💪

Le agregue una botonera en la parte superior derecha que permite al usuario cambiar el idioma en ingles y español.

Como asi también,agregue un buscador que permite al usuario buscar una noticia por una palabra o frase clave en el titulo de la misma. Mostrando por pantalla las Noticias con la palabra o frase relacionada.

Por ultimo hice un paginado sencillo para ir mostrando mas noticias con el boton  **Ver mas** y volver a la pagina inicial con el boton  **Volver al inicio**.

## Tecnologias / Herramientas ⚙

- React
- React-Bootstrap

## Requisitos ✅

- Crear una aplicación web con react, que consuma la API provista por https://newsapi.org/ o https://newsdata.io/docs , la aplicación debe tener la siguiente estructura:

![Estructura](https://res.cloudinary.com/dtbfspso5/image/upload/v1690660841/Captura_de_pantalla_2023-07-29_165936_sgrfa9.png)

- Componentes:

1. Titulo
2. Formulario (este contiene el select)
3. ListaNoticia
4. Noticia

- Desde el select superior, debe poder elegir las diferentes categorías (provistas por la api ver en la documentación) y cargar en cards las mismas.

- Modifica la web anterior permitiendo que el usuario seleccione el país y la categoría de las noticias que quiere ver.

> **NOTA**:la api newsapi funciona solo en forma local y no en un proyecto de producción, si quieren deployar el proyecto en netlify usar newsdata

> **IMPORTANTE**: Para que funcione el proyecto en su Pc se debe hacer el npm i para poder traer los modules de bootstrap y todo lo necesario para poder darle el inicio al proyecto.

## Como Clonar el repositorio 💻

```bash
Agrego el link de mi repo [repositorio](https://github.com/MartinGramajo/ejercicio12.git)

git clone https://github.com/MartinGramajo/ejercicio12.git
```

## Como contribuir con el repositorio 🤝

Para contribuir en el proyecto debe ponerse en contacto al siguiente mail: **martingramajo08@gmail.com**

## Autores 🤺

1. Mago

## Licencia 📃

copyright (c) 2023
