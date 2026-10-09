# Introducción a JavaScript

## Contexto de JS

JavaScript (JS) permite agregar interacción a páginas web y también desarrollar aplicaciones y servidores.

Google Trends, GitHub Octoverse y encuestas como la de Stack Overflow muestran distintos aspectos de su uso: interés en búsquedas, actividad en repositorios y respuestas de desarrolladores.

## ECMAScript

**ECMAScript es el estándar que define cómo funciona JavaScript:** su sintaxis, tipos de datos, operadores y funciones básicas. JavaScript sigue ese estándar.

- **ES5 (2009):** una versión anterior del estándar.
- **ES6 o ES2015:** incorporó `let`, `const`, funciones flecha y clases.
- **ES2016, ES2017, etc.:** desde 2015, las versiones se nombran por año.

## Java y JavaScript

Son lenguajes distintos, aunque sus nombres se parecen.

- **Java:** se utiliza en aplicaciones y servidores; se ejecuta sobre la máquina virtual de Java (JVM).
- **JavaScript:** se ejecuta en navegadores y en otros entornos, como Node.js.

Java tiene **tipado estático**: el tipo de una variable se comprueba antes de ejecutar el programa. JavaScript tiene **tipado dinámico**: una variable puede recibir valores de distintos tipos durante la ejecución.

```java
// Java
int edad = 20;
```

```js
// JavaScript
let edad = 20;
edad = "veinte"; // Ahora contiene un texto.
```

### Intérprete de JavaScript

El intérprete es la parte del motor que ejecuta instrucciones del código. Los motores modernos también compilan código para mejorar su velocidad.

Por ejemplo, `console.log(2 + 3)` muestra `5` en la consola.

### Motor V8

**V8 es el motor de JavaScript desarrollado por Google**, utilizado en Chrome y Node.js. Procesa y ejecuta el código, y también puede compilarlo a código máquina.

### NODE.JS
Node.js es un entorno que permite ejecutar JavaScript fuera del navegador, por ejemplo, para crear servidores o ejecutar programas desde la terminal. Utiliza el motor V8 para ejecutar tu código. No es un lenguaje: el lenguaje sigue siendo JavaScript.


## Lugares de referencia

- **MDN Web Docs:** documentación de JavaScript y tecnologías web.
- **ECMA-262:** la especificación oficial de ECMAScript.
- **JavaScript.info y W3Schools:** tutoriales y ejemplos.
- **Wikipedia:** contexto general del lenguaje.

**MDN explica el lenguaje; ECMA-262 define el estándar.**



## ------------------------->    Uso y entorno de trabajo    <----------------------


### JavaScript vanilla

Significa usar **JavaScript puro**, sin librerías ni frameworks como React o Vue. No es otra versión del lenguaje.

Por ejemplo, para cambiar el texto de un `<h1>` existente en una página:

```js
document.querySelector("h1").textContent = "Hola";
```

### Explorador

Los navegadores modernos incluyen un motor que ejecuta JavaScript. Chrome y Brave se basan en Chromium; Firefox y Safari también permiten ejecutarlo.

Para practicar, abre las herramientas de desarrollo y entra en **Consola**. Allí puedes escribir código y ver resultados o errores.

### Playground

Un **playground** es un entorno en línea para escribir y ejecutar código sin configurar un proyecto local. Sirve para probar ejemplos pequeños y compartirlos.

### Instalación

Para ejecutar JavaScript fuera del navegador podemos instalar **Node.js**, un entorno de ejecución que utiliza el motor V8.

Un editor o IDE sirve para escribir código; **Node.js se encarga de ejecutarlo**. Puedes usarlo desde una terminal independiente o desde la terminal integrada del editor.

Descarga Node.js desde su [sitio oficial](https://nodejs.org/es/download). Después, comprueba la instalación con `node --version`.

Para ejecutar un archivo `.js`, usa:

```sh
node ejemplo.js
```

Si ejecutas JavaScript en el navegador, no necesitas instalar Node.js: el navegador ya incluye su propio motor.


## ----------------------->    Buenas prácticas    <-----------------------------

