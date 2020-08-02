<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$formcontent = "From $name \n Message: $message";
$mailsubject = "Contact Form";
$recipient = "mack.webb37@gmail.com";
$mailheader = "From: $email \r\n"
mail($recipient, $mailsubject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>