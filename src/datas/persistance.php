<?php
// Pour lire votre json
$sourceJson = file_get_contents("../../db/source.json");
$data = json_decode($sourceJson, true);
$dataReceived = isset($_POST["data"]) ? $_POST["data"] : NULL;
$actionToDo   = isset($_POST["action"]) ? $_POST["action"] : NULL;

if(isset($dataReceived)){
    if($actionToDo=="update"){
        $parsedJSON = json_decode($dataReceived, true);
        $data[$parsedJSON['id']] = $parsedJSON;
        $test = json_encode($data);
        echo $test;
    } else if($actionToDo=="delete"){
        unset($data[$dataReceived]);
        echo json_encode($data);
    } 
    $newDatas = json_encode($data);
    file_put_contents("../../db/source.json", $newDatas);
} else{
    echo $sourceJson;
}


// Pour modifier les données 
// $data[0]['propriete'] = "valeur";


// pour sauvegarder de nouveau dans le source.json
// $newData = json_encode($data);
// file_put_contents('source.json', $newData);

?>