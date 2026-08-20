# **Analisis y Desarrollo de Software**

## Aprendiz: Emmanuel Sierra Holguin


## Ficha: 3412768


## Curso: Programación con Node.js y APIs REST


## Instructor: Carlos Navia


## Fecha:20/08/2026

# iniciamos el **proyecto system-analitics**

1. iniciamos cmd
2. mkdir system-analitics(creamos la carpeta)
3. cd system-analitics(accedemos a la carpeta)
4. code .(accedemos al VS code)
5. npm init -y (crea el package.json y modifica type para que diga "type": "module")

## **creamos los archivos**

- cli-tool.js
- registro-sistema.js
- system-monitor.js


# instalamos chalk ejecutando en la terminal **npm install chalk**, esto integra **package-lock.json**.

con esto podremos darle color a cada linea de codigo para el momento de ejecutarse en la consola no se vea todo en blanco.

## utilizaremos los siguientes colores mediante **chalk**

1. Verde (Inicio y fin del sistema)
Predeterminada (normal): (chalk.green('Texto'))

Predeterminada (con negrita): (chalk.green.bold('Texto'))

2. Azul (Accesos de usuarios)
Predeterminada (normal): (chalk.blue('Texto'))

Predeterminada (brillante): (chalk.blueBright('Texto'))

3. Amarillo (Medición de tiempo)
Predeterminada (normal): (chalk.yellow('Texto'))

Predeterminada (con negrita): (chalk.yellow.bold('Texto'))

4. Naranja (Advertencias)
Personalizada (normal): (chalk.hex('#FFA500')('Texto'))

Personalizada (negrita): (chalk.hex('#FFA500').bold('Texto'))

5. Rojo (Errores)
Predeterminada (normal): (chalk.red('Texto'))

Predeterminada (con negrita y brillo): (chalk.redBright.bold('Texto'))

6. Cyan 
Predeterminada (normal): (chalk.cyan('Texto'))

Predeterminada (con negrita): (chalk.cyan.bold('Texto'))

# **App.js**

- process.stdin.setEncoding('utf-8'): configura la entrada de la terminal para traducir los datos que escribe el usuario a texto legible en formato UTF-8.

- process.stdin.on('data', (data) => { ... }): abre un escuchador continuo que detecta cada vez que el usuario ingresa datos y presiona Enter.

- const input = data.trim(): toma el texto capturado y elimina los espacios en blanco o saltos de línea sobrantes al inicio y al final.


# **src/cli-tool.js**

## importamos chalk mediante **import chalk from 'chalk';**

introducimos el codigo, añadimos estilo con chalk.

ej:

- export default function ejecutarCli(): exporta esta función completa para que pueda ser importada y ejecutada desde otro archivo principal.

- process.uptime(): calcula el tiempo exacto en segundos que lleva corriendo el proceso actual de Node.js en la terminal.

- process.exit(0): detiene y cierra por completo la ejecución del programa de forma limpia.


# **src/registro-sistema.js**

## importamos chalk mediante **import chalk from 'chalk';**

introducimos el codigo y damos estilo a la terminal con chalk

ej:

- console.time cuenta el tiempo desde el inicio que ejecuta el script y console.timeEnd es el final del cronometro cuando el script termina.
- console.count es una funcion avanzada, cada vez que el usuario pasa por aqui se lleva la cuenta.
- console.warn: manda un mensaje de advertencia.
- console.error manda un mensaje de error critico en el sistema cuando hay fallos.
- console.table(usuarios) toma los objetos y los mete en una tabla.


ejecutamos en la terminal **node src/registro-sistema.js**

# **system-monitor.js**

## importamos chalk mediante **import chalk from 'chalk';** y cambiamos **const os = require('os');** por **import chalk from 'chalk';** 

ya que ambos son modulos totalmente diferentes y estar en el mismo archivo daña el codigo

actualizamos la mayoria de lineas de codigo con chalk

ej:

- `import os from 'os'`: importa el módulo nativo de Node.js para extraer información del sistema operativo de la computadora.
- `os.platform()` y `os.arch()`: detectan el sistema operativo actual (ej. Windows, Linux) y su arquitectura de procesamiento (ej. x64).
- `os.cpus()`: extrae los detalles del procesador, permitiendo consultar el modelo del primer núcleo con `[0].model` y la cantidad total de núcleos con `.length`.
- `os.freemem()` y `os.totalmem()`: consultan la memoria RAM libre y total del equipo en bytes (se dividen entre $1024 \times 1024$ para transformarlos a Megabytes).
- `os.uptime()`: obtiene el tiempo total que lleva encendida la computadora en segundos
- `os.userInfo().username`: recupera el nombre de usuario de la sesión actual del sistema operativo.


# ahora iniciamos **git y githud**

1. git init
2. git add .
3. git commit -m ""
4. git branch -M main (la volvemos en main en vez de master el, es el estandar actual.)
5. git remote add origin URL
6. git push -u origin main

