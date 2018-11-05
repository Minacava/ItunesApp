# Apicación Itunes 
    
Tecnologías y herramientas utilizada 

  - Angular 6
  - Bootstrap 4.1.3
  - Material Icons
  - jQuery 3.3.1
  - Express 4.16.4

# Puntos del Desarrollo

  - Instalación de los paquetes de Bootstrap/ Jquery/ Material Icons
  - Creación de los componentes principales, Home/Albums/Ion-search
  - Creación del archivo app.routing.ts y las rutas correspondientes
  - Creación del servicio itunes.service.ts, este servicio será quien va hacer las peticiones de la api a Itunes. 
  - Importamos el servicio al componente Albums para comenzar con las pruebas de mostrar en la vista. En el componente Albums se muestra una selección de canciones aleatorias.
  - Posteriormente empezamos a trabajar con el componente ion-search.component. que será el encargado de mostrar los resultados de búsqueda.
  - Importación del servicio al componente Ion.search. 
  - Recogemos el valor del input que el usuario escribe (nombre del artista). Esa acción en recogida y comparada con la información que proviene de la api para ser mostrada en la vista. En la vista se mostrará todas las canciones del artista solicitado 
  - En las cards de la información recibida por parte de la Api se muestra: La imagen del disco, canción y el nombre del disco. Y un icon para marcar la tarjeta como favorito
  - Icono Favorito (Cards), cuando el usuario mediante el evento Click selecciona, este se cambia de color para indicarlo, para ello utilicé jQuery y el método ToggleText. Para poder cambiar el color trabajé con dos icons diferentes según si clickas o no cambia el icon mostrado. Esta acción esta llamada en el meétodo que busca mediate el Id cual es el card seleccionado y lo mete en la variable:<array> llamada favSelected.
  - En el navegador se encuentra otro icono que muestra el número de favoritos que tienes seleccionados. Para conseguir que se muestre el número, dentro del método, creé otra variable que cuenta cuantos elementos tiene y se muestra directamente en la vista. 
  - Para poder tener encuentra la posibilidad que el usuario deseleccioné un card como favorito, creé otro método que lo que hace es comparar de nuevo el Id y si coincide sacarlo del arreglo, este método es llamado durante el evento click, con el método changeColorFav
  - Preparar la app para producción y subida a Heroku


Características de la App:

* Buscar canciones por Artista
* Seleccionar tu canción favorita 
* Mostrar el número de canciones favoritas 

Links
[Github: ItunesApp Code]( https://github.com/Minacava/ItunesApp)
[Heroku: ItunesApp ]( https://itunesapp-marina.herokuapp.com/)
[Marina Camacho Web Portofolio ](http://www.marinacamacho.com/index.html)

