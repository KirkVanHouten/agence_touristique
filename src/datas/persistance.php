<?php
$sourceJson = file_get_contents("../../db/source.json");
$data = json_decode($sourceJson, true);
// Variable containing the data than will be send by the front side (or nothing if we just fetch the destinations json)
// will contain json object if called with 'update' and an id if called with 'delete'
$dataReceived = isset($_POST["data"]) ? $_POST["data"] : NULL;

// Variable telling the php file if he should update the json file(adding/editing) or delete from it, will be null
// when only fetching the data
$actionToDo   = isset($_POST["action"]) ? $_POST["action"] : NULL;

// Will execute only if the front sent datas
if(isset($dataReceived)){
    // If the actionToDo variable is set to "update", the following code will parse the json received from the
    // front and will set the destination linked to the id parsed at the value parsed
    // ex : i receive an object {a: 'a', b:'b', id:0}, so if $data[0] already exist, it will overwrite it
    // and if it does not exist it will create it
    if($actionToDo=="update"){
        $parsedJSON = json_decode($dataReceived, true);
        $data[$parsedJSON['id']] = $parsedJSON;
    } 
    // Else if the actionToDo variable is set to delete, we use the id sent to us to unset the destination from
    // the data list
    else if($actionToDo=="delete"){
        unset($data[$dataReceived]);
    } 

    // finally, whatever the action is, we encode the data variable to a json format and we push it into the source.json file
    $newDatas = json_encode($data);
    file_put_contents("../../db/source.json", $newDatas);
} 
// If we did not receive any data, it means the front wants to fetch the source.json file, we then simply echo it
else{
    echo $sourceJson;
}
?>