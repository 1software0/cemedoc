<?php
$name       = @trim(stripslashes($_GET['name']));
$from       = @trim(stripslashes($_GET['email']));
$subject    = @trim(stripslashes($_GET['subject']));
$message    = @trim(stripslashes($_GET['message']));
$to   		= 'contacto@cemedoc.com';//replace with your email jorgemorenoandres@hotmail.com

mail($to, "Contacto cemedoc: ".$subject, $message."\n".$name."<".$from.">") or die("No se envio el correo");
mail($from, "Gracias por su contacto", "Gracias por su contacto.\n Recibirá un correo de nosotros pronto.")or die("No se envio el correo");
echo "ok\n";
http_response_code(200);
