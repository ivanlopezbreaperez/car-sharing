Gestión de coches – Kata
========================

  ###### Partiendo de una estructura de datos jerárquica, en formato JSON, se propone realizar ciertas operaciones de lectura y manipulación operaciones.

Consideraciones previas.
-----------------------
  1. La estructura de datos se encuentra accesible en …..
  2. Se considera conveniente el acceso de los miembros de cada equipo a un proyecto de repositorio de código, GitHub, por ejemplo
  3. La salida de los datos que se deriven de la ejecución de cada parte del reto será a consola.  
  4. Python, Shell Script, PHP o similar: terminal de ejecución
  5. Javascript: consola de depuración de Chrome o terminal de ejecución.
  6. Debe existir un acceso a internet para los componentes de los equipos, puesto que previamente al inicio del desarrollo habrán de buscar seleccionar los recursos que crean convenientes.
  7. Se propone una duración de 4 horas.

Estructura de datos:
--------------------
* Usuario:
  - Posición
    - Latitud
    - Longitud
  - Trayecto
    - Hora del desplazamiento _(dd/mm/yyyy hh:mm:ss)_
    - Rol en el trayecto (Pasajero/Conductor)
    - Pasajeros (Identificados por su Nombre de usuario, usuarios y conductor)
  - Hucha
  - Plazas  
  - Nombre de usuario (Único)



Puntos del reto:
----------------
  1. Operaciones de manipulación de datos estandarizados para usuarios
    - Crear usuario
    - Mostrar todos los datos de un usuario
    - Actualizar completa o parcialmente los usuarios
    - Eliminar usuario
  2. Un método que reciba los usuarios de la app, una posición de usuario, hora de salida y que devuelva los usuarios más cercanos a la hora de salida y distancia al usuario a los datos introducidos.  
  3. Implementar un sistema de recompensas a los conductores en base a los desplazamientos que realicen, aumentando el saldo de su hucha de puntos.
    - Ej: Cada viaje proporciona una moneda al conductor por pasajero.
  4. Implementar un método el que poder disminuir los puntos de la hucha.
  5. Un método que ejecute los desplazamientos modificando la hucha de los conductores que hayan realizado trayectos.
  6. Representar los datos de posición de los conductores.
  7. BONUS Retos extra:
      - Distancia entre la posición introducida y los conductores.
      - El método puede recibir un radio en el que se busca a los conductores cercanos.
      - Los datos están organizados por su hucha, la hora del próximo desplazamiento, nombre y distancia a RSI.
      - Añadir un nuevo campo a los usuarios que guarde los puntos totales que ha ganado.


Tecnologías de desarrollo:
---------------------------
#### C++, C#, Java, JavaScript, Python, PHP, Go, Shell Script ...

Endpoints:
--------------
1. Manipulación de usuario
  - Crear: /users/create/:name/:lat/:lon/:seats/:userrol **Post**
  - Lectura: /users/detail/:name **Get**
  - Actualizar: /users/update **Put**
    - body:
      - username *String*
      - lat *Float*
      - lon *Float*
      - userRol *Driver o Passenger*
      - seats *Int*
  - Eliminar: /users/delete/:name **Post**
2. Ordenar usuarios por distancia y hora de salida
  - userDistance: /users/userDistance **Get**
    - body:
      - position *({"lat":latitude, "lon":longitude})*
      - date *(dd/mm/yyyy hh:mm:ss)*
3. Añadir monedas de los usuarios
  - Añadir: /rewards/add **Post**
    - body:
      - usernames *(['Chema', 'Ivan', 'Patri'] o 'Patri')*
      - coins *Int*
4. Quitar monedas de los usuarios
  - Quitar: /rewards/add **Post**
    - body:
      - usernames *(['Chema', 'Ivan', 'Patri'] o 'Patri')*
      - coins *Int*
5. Ejecutar los desplazamientos

6. Representar los datos de los conductores
