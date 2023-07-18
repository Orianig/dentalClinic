# Proyecto FRONT - SISTEMA DE CLINICA DENTAL

Este proyecto front-end fue realizado utilizando React, Vite y Tailwind CSS. El sistema de clínica dental se conecta a una base de datos previamente creada utilizando Sequelize y Express. El sistema incluye funciones de registro y inicio de sesión, y al ingresar se muestra un dashboard que consta de una barra lateral (sidebar) y un encabezado (header). A continuación se detallan las funcionalidades principales del sistema:

#VISTAS DEL SISTEMA

![INICIO](https://github.com/Orianig/dentalClinic/blob/main/src/assets/images/Readme/inicio.png)

![INICIO](https://github.com/Orianig/dentalClinic/blob/main/src/assets/images/Readme/usuario.view.png)

![INICIO](https://github.com/Orianig/dentalClinic/blob/main/src/assets/images/Readme/doctor.view.png)

![INICIO](https://github.com/Orianig/dentalClinic/blob/main/src/assets/images/Readme/admin.view.png)

### Menú
El menú del sistema contiene varias pestañas que permiten acceder a diferentes secciones y funcionalidades:

### Perfil
En esta sección, los usuarios pueden ver y editar su perfil personal. Pueden actualizar su información personal, como nombre, dirección y número de teléfono.

### Citas
Esta sección permite a los usuarios ver todas sus citas programadas. Pueden ver la lista de citas, incluyendo detalles como la fecha, la hora y el nombre del dentista. También tienen la opción de realizar actualizaciones en las citas existentes, como cambiar la fecha o la hora.

### Servicios
En la sección de servicios, se muestra una lista de los servicios dentales disponibles en la clínica. Los usuarios pueden obtener información detallada sobre cada servicio, incluyendo descripción y costo.

### Usuarios Registrados
En esta sección, los usuarios con privilegios de administrador pueden ver la lista de todos los usuarios registrados en el sistema. Pueden acceder a información de cada usuario, como nombre, dirección de correo electrónico y tipo de usuario (user, doctor o admin).

### Todas las Citas
En esta sección, los usuarios con privilegios de administrador pueden ver todas las citas programadas en el sistema. Pueden ver una lista completa de citas, incluyendo detalles como la fecha, la hora, el nombre del paciente y el nombre del dentista.

### Crear Cita
Los usuarios pueden utilizar esta funcionalidad para programar una nueva cita. Deben ingresar la fecha, la hora y seleccionar el dentista correspondiente.

### Detalle de Citas
En esta sección, los usuarios pueden ver los detalles completos de una cita específica. Esto incluye información sobre el paciente, el dentista, el servicio programado y otros detalles relevantes.

### Roles de Usuario
El sistema cuenta con tres tipos de usuarios, cada uno con diferentes niveles de acceso y funcionalidades:

### User: Este tipo de usuario tiene acceso básico al sistema. Puede ver su perfil, ver y editar sus propias citas, y acceder a información general sobre servicios y usuarios registrados.

### Doctor: Los doctores tienen un nivel de acceso adicional. Además de las funcionalidades de los usuarios regulares, los doctores también pueden ver las citas de sus pacientes asignados y actualizar la información de las citas.

### Admin: Los administradores tienen el nivel de acceso más alto en el sistema. Tienen acceso completo a todas las funcionalidades del sistema, incluyendo la capacidad de ver todas las citas y todos los usuarios registrados.

## Licencia

License and Copyright Add MIT Licence. The style is completely created by Oriana Infante. 





