<?php
$id = 1;
$exist = 'true';
$id_num = 0;
// function reset_id() {
//     global $id;
//     $id = 0;
// }
// $GLOBALS["id"]
function check_id() {
    global $exist;
    if($exist == 'true') {

        $id = $GLOBALS["id"];
        require 'conexionbd.php';
        $chekid = mysqli_query ($conection, "SELECT * FROM usuarios WHERE ID = '$id' ORDER BY ID ASC ");
        // $base_pay = $row[0]; 
        $chekid = $chekid->fetch_array();
        $chekid_num = intval($chekid[0]);
        if($chekid_num == $id){
            // echo($GLOBALS["id"]);
            $GLOBALS["id"]++;
            // echo "Este id ya existe"
            return 'next' ;
        } else {
            // echo "Este id no existe"
            // echo('no existe');
            $exist = 'false';
        }
    } else {
        return 'create';
    }

}
while (check_id() == 'next') {
  
}

if(check_id() == 'create') {
// $GLOBALS["$id_num"] = $GLOBALS["id"];
} 
// global $id;
// print($GLOBALS["id"]);


?>	
