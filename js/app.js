//doc --> apunta al inicio del documento HTML <html>
var doc = $(document);
//ready --> cuando se HA CARGADO EL HTML COMPLETO:
// - recursos del HEAD: css, fuentes, script js, fontawesonne ...
// - del BODY: TODO EL HTML + imagenes ...,
// SE EJECUTARÁ LA FUNCIÓN iniciar
doc.ready(iniciar);

function iniciar() {
    console.log('Hola Mundo ...');
    var xqSomos = $("header nav a#qSomos");
    var xDonaciones = $("header nav a#Donaciones");
    var xformacion = $("header nav a#formacion");
    var xServicios = $("header nav a#Servicios");
    var xAdopotar  = $("header nav a#Adoptar");
    var xHome  = $("header img#home");
    
    xHome.click(cargarHome);
    xqSomos.click(cargarqSomos);
    xDonaciones.click(cargarDonaciones);
    xformacion.click(cargarformacion);
    xServicios.click(cargarServicios);
    xAdopotar.click(cargarAdoptar);
   
    cargarHome();
    
}

function cargarHome(){
    $("main").load("html/home.html");
    $("head").children().last().remove();
    $("head")
    .append ("<link rel='stylesheet' href='../css/home.css'>");
}

function cargarqSomos(){
    console.log('clikeado qSomos...');
//cargar el fichero /html/qSomos.html en la <main>   
    $("main").load("html/qSomos.html");
    $("head").children().last().remove();
    $("head")
    .append ("<link rel='stylesheet' href='../css/qSomos.css'>");
}
function cargarDonaciones(){
    console.log('clikeado Donaciones...');
//cargar el fichero /html/Donaciones.html en la <main>   
    $("main").load("html/Donaciones.html");
    $("head").children().last().remove();
    $("head")
    .append ("<link rel='stylesheet' href='../css/Donaciones.css'>");
}

function cargarformacion(){
    console.log('clikeado formacion...');
//cargar el fichero /html/formacion.html en la <main>   
    $("main").load("html/formacion.html");
    $("head").children().last().remove();
    $("head")
    .append ("<link rel='stylesheet' href='../css/formacion.css'>");
}

function cargarServicios(){
    console.log('clikeado Servicios...');
//cargar el fichero /html/Servicios.html en la <main>   
    $("main").load("html/Servicios.html");
    $("head").children().last().remove();
    $("head")
    .append ("<link rel='stylesheet' href='../css/Servicios.css'>");
}
function cargarAdoptar(){
    console.log('clikeado Adopotar...');
//cargar el fichero /html/Adopotar.html en la <main>   
    $("main").load("html/Adoptar.html");
    $("head").children().last().remove();
    $("head")
    .append ("<link rel='stylesheet' href='../css/Adoptar.css'>");
}