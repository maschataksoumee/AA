<?php
	ini_set('track_errors', 1);
    $hostname = `hostname`;
	$hostnamearray = explode('.', $hostname);
    $hostname = $hostnamearray[0];
    require "PHPMailer/class.phpmailer.php";
    require "PHPMailer/class.smtp.php";
    $mail = new PHPMailer;
    $mail->SMTPDebug = 0;
    $mail->IsSMTP();
    if(strpos($hostname,'cpnl') === FALSE) //if not cPanel
    {
        $mail->Host = 'relay-hosting.secureserver.net';
    }
    else
    {
        $mail->Host = 'localhost';
    }
    $mail->SMTPAuth = false;
    $mail->Username = 'no-reply@authorassists.in';          // SMTP username
    $mail->Password = 'wp54P1AeLgB}';                     // SMTP password
    $mail->From = "no-reply@authorassists.in";
	$mail->FromName = 'Authorassists';
    $mail->AddAddress("soumee.m@cosmicstrands.com");
    // $mail->addCC("ayan@atlantisdigital.in");
    $mail->addBCC("maschataksoumee@gmail.com");
    $mail->Subject = "This is a test mail via authorassists.in #2";
    $mail->Body = "This is a test mail #2";
    $mail->AddAttachment("invoiceFiles/18082900841.pdf");
    $mailresult = $mail->Send();
    if(!$mailresult)
    {
        echo 'FAIL: ' . $mail->ErrorInfo;
    }
    else
    {
        echo "Mail Send Successfully";
    }
?>