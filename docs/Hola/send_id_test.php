<?php
include 'conexionbd.php';
include 'verify_id.php';

$Name = 'test';
$User = 'test';
$Email = 'test';
$Pasw = 'test';

$insert_data = "INSERT INTO usuarios(ID, Nombre, Usuario, Correo, Contraseña) VALUES('$id','$Name','$User','$Email','$Pasw')";
$result = mysqli_query($conection,$insert_data);

if ($result) {
    echo("Los datos se enviaron correctamente");
} else {
    echo("Hubo un error al enviar los datos");
}
       
        
?>