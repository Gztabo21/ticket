# Ticket
React Nodejs Mysql 

![alt text](https://avatars1.githubusercontent.com/u/22778784?s=60&v=4 "GUSTAVO CACHARUCO")

## GUSTAVO CACHARUCO
# EJECUTAR LA APLICACION
* [Clone Repositorio](https://github.com/Gztabo21/ticket.git)
# Ejecutar Server

* import la DDBB en MYSQL. **ubica la carpeta** "api-server\src\config\db", aqui encontraras los archivos sql que vas importar
## COMO IMPORTA EL SQL ?
### TERMINAL (Linux)     
1. Nos logeamos en Mysql por la terminal
     ```mysql -u root -p```
2. Creamos un nuestra tabla donde nos vamos a importar
     ```CREATE DATABASE new_database;```
3. Verá esta salida confirmando de que se creó.
      ```Query OK, 1 row affected (0.00 sec)```
4. Luego salga presionando CTRL + D. Desde la línea de comando normal, puede importar el archivo de volcado con el siguiente comando:
       ``` mysql -u username -p new_database < data-dump.sql  ```
       
  **username** = es el nombre de usuario con el que puede iniciar sesión en la base de datos.
  **new_database** = es el nombre de la base de datos recién creada.
  **data-dump.sql** = es el archivo de volcado de datos a importar, ubicado en el directorio actual.
### phpmyAdmin
1. Accede a tu base de datos mediante PHPMyAdmin , **Abre el navegador y escribe Localhost/phpmyadmin**
    introduce el tu **Usuario** y la **Contraseña**. para acceder al panel de administracion.
2. Crea la Base de datos.
3. Seleccione la base de datos ya creada.
4. Ve a la pestaña *Importar* archivos.
5. Haz clic en *Examinar*, encuentra el archivo SQL en tu computadora, haz clic en Abrir, y luego haz clic en Ir.
Esto ejecuta el archivo SQL y actualiza la base de datos según lo que se especifica en el archivo SQL. La restauración de la base de datos puede demorar varios minutos.

* Ubiquese en la Carperta API-SERVER con la terminal. si usas VSCODE abre la carpeta con el editor(VSCODE), 
  y con la combinacion de tecla **CTRL + J** , Te Abrira la Terminal donde Ejecutaras los Siguiente Codigos:
* Ejecute `npm install`, Para install las dependencias.
* Configure la conexion a la base de datos  
  * **ubicado en la carpeta** "api-server\src\config\db.js"
  * ```const sequelize = new Sequelize('nameDB', 'user', 'password', {host: 'localhost', dialect: 'mysql',})```
* Ejecute `npm start`
Se ejecutar  y se levantara el Server en el **PORT 8080 **

# Ejecutar View con React

* Ubiquese en la Carperta **VIEW-TICKET**,con la terminal. si usas VSCODE abre la carpeta con el editor(VSCODE), 
  y con la combinacion de tecla **CTRL + J** , Te Abrira la Terminal donde Ejecutaras los Siguiente Codigos: 
* Ejecute `npm install`, Para install las dependencias.
* Ejecute `npm start`
Se ejecutar  y se levantara en  [localhost:3000](http://localhost:3000/)

# CREDENCIALES DE LOS USUARIOS DE PRUEBA
**Usuario Administrador**|  |
--------------------|-------|
  **EMAIL:**| admin@ticket.com|
  **PW:** | 123456|
  
**Usuario NORMAL **|  |
--------------------|-------|
  **EMAIL:**| user@ticket.com|
  **PW:** | 123456|  

# 
REDES SOCIALES| 
------------ | 
**[TWITTER](https://twitter.com/Gz_cacharuco)**|
**[INSTAGRAM](https://www.instagram.com/gustavocacharuco/)** |

