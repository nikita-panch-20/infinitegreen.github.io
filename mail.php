<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$subject= "Thank you for getting in touch with us! 😇✨";


$to = $email;

$body ="Hi ". $name . ",\r\n   We got contact details and will surely will get in touch with you as soon as possible. \r\n Team Infinite Green🌿";
$headers = "From: noreply@infinitegreen.com";
if($email!=NULL){
    mail($to,$subject,$body,$headers);
    echo "<script type='text/javascript'>
                $(#form-message-success).removeClass('hide') ;
                window.history.log(-1);
        </script>";
}

?>