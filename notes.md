MODULO 3 JAVASCRIPT

---

Clase 1 JS Intro variables

---

INDEX CLASE del profe ( no la del pdf de Desafío Latam)con fines orientativos

1. Historia
   - 1995 > X
   - Netscape 2
   - Mozilla
   - BUM
   - Timeline
2. Variables
   - Tipos de variables
   - Tipos de datos
     - Primitivos
3. Runtime

   - Chromium (https://www.chromium.org/chromium-projects/)

   * Node.js (https://nodejs.org/en/)
   * Deno (https://deno.com/)

4. Condiciones
   - If
   - If, else-if, else
   - Operadores comparación

---

Clase 2 Javascript Condiciones

---

Esquema para enfrentar un ejercicio, así lo ordeno el profe Francisco y creo que es muy útil para sortear la confusa redacción del desafío Latam

1. Agregar los elementos al HTML (input, botón y párrafo o span)
   HTML
   - <input id/>
   - <button onclick="validarPassword()">
   - <p>
2. Agregar evento al disparador (el botón)
   onclick = "validarPassword()"
3. Seleccionar el valor del input y guardarlo en una variable
   utilizamos document.querySelector()
4. Si se cumple la condicion
   a. Seleccionar el párrafo
   b. Modificar el contenido del parrafo (.innerHTML) mostrando "Lo lograste"

FROM CHAPGPT

    Diferencia entre if, else-if y else:

    En JavaScript, if evalúa una condición y ejecuta el bloque de código asociado si esta es verdadera. else-if se usa después de un if para agregar una segunda condición si la primera no se cumple. else, en cambio, no tiene una condición; simplemente ejecuta el bloque asociado si ninguna de las condiciones anteriores fue verdadera.

    El if y el else en JavaScript se utilizan para evaluar condiciones en términos de "sí" o "no" (verdadero o falso):

    if ejecuta su bloque de código cuando la condición es verdadera.
    else actúa como una alternativa: si ninguna de las condiciones if o else-if anteriores es verdadera, entonces el bloque de else se ejecutará.

    De este modo, if y else forman una estructura básica de decisión binaria.

SHORCUTS

Comentario bloque = shift + option + A

GLOSARIO

Diferencia entre lenguaje interpretado y lenguaje compilado

    Un lenguaje interpretado ejecuta el código línea por línea a través de un intérprete en tiempo real, lo que permite una mayor flexibilidad pero generalmente hace que la ejecución sea más lenta. Un lenguaje compilado, en cambio, convierte el código completo en un archivo ejecutable mediante un compilador antes de su ejecución, lo que suele mejorar el rendimiento pero requiere recompilar cada vez que se hacen cambios.

    Ejemplo lenguaje interpretado: JS

        JavaScript es un ejemplo de un lenguaje interpretado, ya que su código se ejecuta en un entorno que lo interpreta, como el navegador o Node.js, donde es procesado línea por línea en tiempo de ejecución.

    Ejemplo lenguaje compilado: C++

        C++, por otro lado, es un lenguaje compilado. El código C++ debe ser compilado por un compilador (como GCC o Clang) antes de poder ejecutarse, lo que convierte el código fuente en un archivo binario ejecutable que la máquina puede correr directamente.

Lógica de negocios

    La lógica de negocios es el conjunto de reglas y procesos que definen cómo opera una aplicación o sistema para cumplir los objetivos específicos de una organización o negocio. Incluye la toma de decisiones, el procesamiento de datos y las operaciones que traducen los requisitos de negocio en funciones que la aplicación ejecuta, separando las reglas del negocio de otros aspectos técnicos de la aplicación.

Runtime JS:

    Un runtime de JavaScript es el entorno donde se ejecuta el código JavaScript. Este entorno contiene elementos clave como el motor de ejecución (por ejemplo, V8 en Chrome) y APIs que permiten al código interactuar con el sistema (por ejemplo, para acceder a la red o al sistema de archivos). Los runtimes, como Node.js para entornos de servidor, extienden las capacidades de JavaScript más allá del navegador.
