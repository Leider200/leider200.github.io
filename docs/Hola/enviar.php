<?php
$Name = isset($_POST['Name']) ? $_POST['Name'] : '';
$User = isset($_POST['User']) ? $_POST['User'] : '';
$Email = isset($_POST['Email']) ? $_POST['Email'] : '';
$Pasw = isset($_POST['Pasw']) ? $_POST['Pasw'] : '';

include 'setid.php';
$id_foto = 000 .$newid.'.jpg';



try {
    $conecction = new PDO("mysql:host=localhost;port=3306;dbname=closebd", "root", "");
    $conecction->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conecction->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $pdo = $conecction->prepare('INSERT INTO usuarios(ID, Nombre, Usuario, Correo, Contraseña, Id_foto) VALUES(?, ?, ?, ?, ?, ?)');
    $pdo->bindParam(1, $newid);
    $pdo->bindParam(2, $Name);
    $pdo->bindParam(3, $User);
    $pdo->bindParam(4, $Email);
    $pdo->bindParam(5, $Pasw);
    $pdo->bindParam(6, $id_foto);
    $pdo->execute() or die(print($pdo->errorInfo()));

    echo json_encode('true');
} catch(PDOException $error) {
    echo $error->getMessage();
    die();
}

?>