# Práctica 4 Conversor temperaturas con Web Worker
# Sistemas y Tecnologías Web de la ULL
## Guillermo Vicente Sánchez Guindulain


**Página de la asignatura** 

[Campus](https://campusvirtual.ull.es/1516/course/view.php?id=187)

**Url del repositorio:** 

[Repositorio](https://github.com/alu0100777154/temperature-2.0/tree/master)

**Page de la práctica:** 

[Práctica](http://alu0100777154.github.io/temperature-2.0/)

**Page de los tests:** 

[Tests](http://alu0100777154.github.io/temperature-2.0/vendor)

**Página personal**

[Personal](http://alu0100777154.github.io)

**Travis**

[![Build Status](https://travis-ci.org/alu0100777154/temperature-2.0.svg?branch=master)](https://travis-ci.org/alu0100777154/temperature-2.0)


#Desplegando la aplicacion en iaas

* Configuración VPN para acceder desde fuera de la ULL:

![VPN](http://i.imgur.com/6hdYjU5.png)

* Entramos a [iaas.ull.es](iaas.ull.es) y configuramos la máquina:

![Maquina](http://i.imgur.com/XRNYzkT.png)

* Dentro de la máquina averiguamos la ip de la máquina con _ifconfig_ y nos conectamos a esta desde nuestro ordenador
 
![SSH](http://i.imgur.com/HGVgQOk.png)

* Instalamos 'npm'

              sudo apt-get install npm

* Clonamos el repositorio de la práctica e instalamos las dependencias

              npm install

* Ejecutamos el static-server.js

![server](http://i.imgur.com/dpDaFHo.png)

* ya podemos acceder a nuestra aplicación web:
              http://10.6.128.80:8080/
