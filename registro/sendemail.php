<?php
$to   		= 'registro@cemedoc.com';//replace with your email jorgemorenoandres@hotmail.com
foreach ($_POST as $key => $value) {
  $texto .= $key.": ".$value."\n";
}
$date = date("j/t/y G:I:s");
mail($to, "Registro cemedoc: ".$date, $texto."\n") or die("No se envio el correo");


http_response_code(200);
header("location: /");
