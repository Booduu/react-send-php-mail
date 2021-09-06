<?php

    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

if (empty($_POST['fname']) && empty($_POST['email'])) die();
  
if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = $_POST['fname'];
	$to = "[YOUR ADDRESS MAIL]";
	$from = $_POST['email'];

	// data

	$msg = $_POST['subject'];

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

    $response = array(
        "firstname" => $_POST['fname'],
        "lastname" => $_POST['lname'],
        "mail" =>  $_POST['email'],
        "subject" =>  $_POST['subject'],
        "mailSent" => true,
        "messageStatut" => "L'email a été envoyé",
    );
    echo json_encode($response);
	
} else {

	// tell the user about error

	echojson_encode(["sent" => false, "message" => "Something went wrong"]);

        $response = array(
            "firstname" => $_POST['fname'],
            "lastname" => $_POST['lname'],
            "mail" =>  $_POST['email'],
            "subject" =>  $_POST['subject'],
            "mailSent" => false,
            "messageStatut" => "Oups, une erreur est survenue !",
        );
        echo json_encode($response);
	}

?>