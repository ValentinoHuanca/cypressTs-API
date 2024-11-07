# CypressTS-API
Bienvenido a mi muestra de conocimientos en cypress, aplicando mis conocimientos en constante crecimiento.
A continuacion se explicara como ejecutar los diferentes casos de prueba en el ambito del testing de APIs
## Branch

Podemos dividir en dos tipos de branches, enfocadas en endpoints de la api y en las que se ejecutan las regressions.
NOTA: lo normal es que cada branch sea una US pero para esta prueba, se tomara el enfoque de una branch=endpoint de la API 

Principales:
* main
* QA(aca se ejecutan las regressions)

Endpoints:
* status
* books
* orders

## Instalar dependencias

**ejecutar en terminal**
```
yarn
````

## Abrir cypress

Se puede abrir cypress especificado para test orientados a e2e y integer 
**Cypress e2e**
```
yarn e2e
````

**Cypress integer**
```
yarn integer
````

## Comandos para ejecutar Test en terminal

### ejecucion sin generacion de reporte

**ejecutar Test orientado a e2e**
```
yarn e2e:run
````

**ejecutar Test orientado a integer**
```
yarn integer:run
````

### ejecucion con generacion de reporte

**ejecutar TS por terminal enfocado en un browser especifico y en e2e testing**
```
yarn test:e2e:browser[]
````
browser:[chrome,firefox,edge]

**ejecutar TS por terminal enfocado en un browser especifico y en integer testing**
```
yarn test:integer:browser[]
````
browser:[chrome,firefox,edge]

## Report

Para generar un reporte HTML se debe ejecutar el comando:
```
yarn browser[]:report
````
browser:[chrome,firefox,edge]

## Regression

Esta se ejecuta en distintos browsers con el comando:
```
yarn integer.browser[]:regression
````
browser:[chrome,firefox,edge]

NOTA:esta accion se debe realizar solo en la branch QA

## NOTA:

Existe el comando:
```
yarn clean:reports
````
El cual se usa para eliminar los reportes generados

## GitActions

Esta heramienta se utiliza para ejecutar los tests en maquinas virtuales y subir los reportes permitiendo su descarga, no solo de las branch de endponits, si no de las regresiones de la branch QA tambien

## Documentacion

https://github.com/vdespa/introduction-to-postman-course/blob/main/simple-books-api.md