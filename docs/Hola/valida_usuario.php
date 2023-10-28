<?php


$Name = $_POST['Name'];
$Pasw = $_POST['Pasw'];

require_once 'conexionbd.php';
// se asume conexion en $conection incluido desde conexionbd.php, ejemlo:
// $conection= mysqli_connect("server", "mi_usuario", "mi_contraseña", "mi_bd");

$consulta = mysqli_query ($conection, "SELECT * FROM Usuarios WHERE Nombre = '$Name' AND Contraseña = '$Pasw'");  

// esto válida si la consulta se ejecuto correctamente o no
if(!$consulta){ 
    echo "Usuario no existe " . $nombre . " " . $password. " o hubo un error ";
    echo mysqli_error($mysqli);
    exit;
} 

// validemos pues si se obtuvieron resultados 
// Obtenemos los resultados con mysqli_fetch_assoc
// si no hay resultados devolverá NULL que al convertir a boleano para ser evaluado en el if será FALSE
if($user = mysqli_fetch_assoc($consulta)) {
    header("location: /CLOSE/GAME/game.html");
    echo "el usuario y la pwd son correctas";
} else {
    echo "Usuario incorrecto o no existe";
}


?>