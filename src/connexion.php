<?php
    $login_normal = "user";
	$login_admin = "admin";
	$password = "ajax";
    $textToDisplay = "";
 
    if( isset($_POST['login']) && isset($_POST['password']) ){
 
        if($_POST['login'] == $login_normal && $_POST['password'] == $password){
            session_start();
            $_SESSION['user'] = $login_normal;
            $textToDisplay = "Connexion réussie !";
        }
        else if ($_POST['login'] == $login_admin && $_POST['password'] == $password){
            session_start();
            $_SESSION['user'] = $login_admin;
            $textToDisplay = "Connexion réussie !";
	    }
        else{
            $textToDisplay = "Erreur";
        }
    }
?>
<html>
<head>
	<title></title>
</head>
<body>
<p><br />
<?= $textToDisplay ?>
</p>
</body>
</html>