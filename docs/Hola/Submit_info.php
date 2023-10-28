<?php
include 'conexionbd.php';

$Name = isset($_POST['Name']) ? $_POST['Name'] : '';
$User = isset($_POST['User']) ? $_POST['User'] : '';
$Email = isset($_POST['Email']) ? $_POST['Email'] : '';
$Pasw = isset($_POST['Pasw']) ? $_POST['Pasw'] : '';

$insert_data = "INSERT INTO usuarios(Nombre, Correo, Contraseña) VALUES('$Name','$Email','$Pasw')";
$result = mysqli_query($conection,$insert_data);

if ($result) {
    echo("Los datos se enviaron correctamente");
} else {
    echo("Hubo un error al enviar los datos");
}
       
        
?>