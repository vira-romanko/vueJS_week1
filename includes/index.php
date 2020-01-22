<?php 
include('functions.php');

// if were passing in auser key in the $_Get superglobal, then go ge a user

if(isset($_GET["getUser"])) {
    $user = getUserData($pdo);

    echo json_encode(($user));
}