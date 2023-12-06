
// FUNCION DE LA BARRA DE NAVEGACION --------------------------------------------------------
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// FUNCIONES DEL ZOOM DE LA HERO ---------------------------------------------------------------
function zoomBackground() {
    const hero = document.getElementById('hero');
    hero.classList.toggle('zoomed');
}

function zoomBackground(shouldZoom) {
    const hero = document.getElementById('hero');
    if (shouldZoom) {
        hero.classList.add('zoomed');
    } else {
        hero.classList.remove('zoomed');
    }
}


// FUNCIONES PARA MOSTRAR LA INFORMACION ADICIONAL DEL INTRO --------------------------------------
function mostrarinfo(){
    var container = document.getElementsByTagName("infoadicional")[0];

    if(infoadicional.style.visibility == "hidden"){
      infoadicional.style.visibility = "visible";
    }else{
      infoadicional.style.visibility = "hidden";
    }

    
}

function cambiardisplay(){
  var container = document.getElementsByTagName("infoadicional")[0];

    if(infoadicional.style.display == "none"){
      infoadicional.style.display = "grid";
    }else{
      infoadicional.style.display = "none";
    }
}

function etiquetacerrar(){
  var container = document.getElementsByTagName("cerrarinfo")[0];

    if(cerrarinfo.style.display == "none"){
      cerrarinfo.style.display = "block";
    }else{
      cerrarinfo.style.display = "none";
    }
}


//FUNCIONES PARA CERRAR Y ABRIR LA INFORMACION ADICIONAL DE LA TRAYECTORIA --------------------------------------------

function trayunicerrar(){
  var container = document.getElementsByTagName("adicionalcarrerawrapper")[0];
    if(adicionalcarrerawrapper.style.display == "none"){
      adicionalcarrerawrapper.style.display = "block";
    }else{
      adicionalcarrerawrapper.style.display = "none";
    }
}

function traynbacerrar(){
  var container = document.getElementsByTagName("adicionalnbawrapper")[0];
    if(adicionalnbawrapper.style.display == "none"){
      adicionalnbawrapper.style.display = "block";
    }else{
      adicionalnbawrapper.style.display = "none";
    }
}

//FUNCIONES PARA ABRIR Y CERRAR LAS TABLAS DE LA TRAYECTORIA NBA ---------------------------------------------------------

function tabla09function(){
  var container = document.getElementsByTagName("tabla09")[0];

    if(tabla09.style.display == "none"){
      tabla09.style.display = "grid";
    }else{
      tabla09.style.display = "none";
    }
}

function tabla10function(){
  var container = document.getElementsByTagName("tabla10")[0];

    if(tabla10.style.display == "none"){
      tabla10.style.display = "grid";
    }else{
      tabla10.style.display = "none";
    }
}

function tabla11function(){
  var container = document.getElementsByTagName("tabla11")[0];

    if(tabla11.style.display == "none"){
      tabla11.style.display = "grid";
    }else{
      tabla11.style.display = "none";
    }
}

function tabla12function(){
  var container = document.getElementsByTagName("tabla12")[0];

    if(tabla12.style.display == "none"){
      tabla12.style.display = "grid";
    }else{
      tabla12.style.display = "none";
    }
}

function tabla13function(){
  var container = document.getElementsByTagName("tabla13")[0];

    if(tabla13.style.display == "none"){
      tabla13.style.display = "grid";
    }else{
      tabla13.style.display = "none";
    }
}

function tabla14function(){
  var container = document.getElementsByTagName("tabla14")[0];

    if(tabla14.style.display == "none"){
      tabla14.style.display = "grid";
    }else{
      tabla14.style.display = "none";
    }
}

function tabla15function(){
  var container = document.getElementsByTagName("tabla15")[0];

    if(tabla15.style.display == "none"){
      tabla15.style.display = "grid";
    }else{
      tabla15.style.display = "none";
    }
}

function tabla16function(){
  var container = document.getElementsByTagName("tabla16")[0];

    if(tabla16.style.display == "none"){
      tabla16.style.display = "grid";
    }else{
      tabla16.style.display = "none";
    }
}

function tabla17function(){
  var container = document.getElementsByTagName("tabla17")[0];

    if(tabla17.style.display == "none"){
      tabla17.style.display = "grid";
    }else{
      tabla17.style.display = "none";
    }
}

function tabla18function(){
  var container = document.getElementsByTagName("tabla18")[0];

    if(tabla18.style.display == "none"){
      tabla18.style.display = "grid";
    }else{
      tabla18.style.display = "none";
    }
}

function tabla19function(){
  var container = document.getElementsByTagName("tabla19")[0];

    if(tabla19.style.display == "none"){
      tabla19.style.display = "grid";
    }else{
      tabla19.style.display = "none";
    }
}

function tabla20function(){
  var container = document.getElementsByTagName("tabla20")[0];

    if(tabla20.style.display == "none"){
      tabla20.style.display = "grid";
    }else{
      tabla20.style.display = "none";
    }
}

function tabla21function(){
  var container = document.getElementsByTagName("tabla21")[0];

    if(tabla21.style.display == "none"){
      tabla21.style.display = "grid";
    }else{
      tabla21.style.display = "none";
    }
}

function tabla22function(){
  var container = document.getElementsByTagName("tabla22")[0];

    if(tabla22.style.display == "none"){
      tabla22.style.display = "grid";
    }else{
      tabla22.style.display = "none";
    }
}

function tabla23function(){
  var container = document.getElementsByTagName("tabla23")[0];

    if(tabla23.style.display == "none"){
      tabla23.style.display = "grid";
    }else{
      tabla23.style.display = "none";
    }
}




// FUNCION PARA CERRAR LA TRAYECTORIA NBA Y LA UNIVERSITARIA

function cerrartraynba(){
  var container = document.getElementsByTagName("adicionalnbawrapper")[0];

    if(adicionalnbawrapper.style.display == "block"){
      adicionalnbawrapper.style.display = "none";
    } else {
      adicionalnbawrapper.style.display = "none";
    }

}

function cerrartrayuni(){
  var container = document.getElementsByTagName("adicionalcarrerawrapper")[0];

    if(adicionalcarrerawrapper.style.display == "block"){
      adicionalcarrerawrapper.style.display = "none";
    } else {
      adicionalcarrerawrapper.style.display = "none";
    }

}