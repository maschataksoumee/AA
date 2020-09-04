<?php
    include_once('pdf.php');
    $InvoiceHTML = $_POST['InvoiceHTML'];
    $invoiceNo = $_POST['invoiceNo'];
    $fileName = $invoiceNo.".pdf";
    $pdf = new Pdf();
    $pdf->load_html($InvoiceHTML);
    $pdf->set_paper("A4","portrait");
	$pdf->render();
	$file = $pdf->output();
    file_put_contents('invoiceFiles/'.$fileName, $file);
    echo "http://aapts.authorassists.in/generate-invoice/invoiceFiles/".$fileName;
    // require 'PHPMailer/PHPMailerAutoload.php';
    // $mail = new PHPMailer(true);
	// $mail->isSMTP();                                   			// Set mailer to use SMTP
	// $mail->Host = 'smtpout.secureserver.net';                   // Specify main and backup SMTP servers
	// $mail->SMTPAuth = true;                            			// Enable SMTP authentication
	// $mail->Username = 'no-reply@authorassists.com';   	        // SMTP username
	// $mail->Password = 'A@N02K!9';							    // SMTP password
	// $mail->SMTPSecure = 'tls';                         			// Enable TLS encryption, `ssl` also accepted
	// $mail->Port = 587;
	// $mail->setFrom('no-reply@authorassists.com');
	// $mail->FromName = 'Authorassists Bill';
	// $mail->addReplyTo('no-reply@authorassists.com');
	// $mail->addAddress("soumee.m@cosmicstrands.com");
	// // $mail->addBCC('ascvasvas@gbfdh.com');
	// $mail->AddAttachment('invoiceFiles/'.$fileName);
	// $mail->isHTML(true);
    // $mail->Subject = "Invoice #".$invoiceNo;
    // $mail->Body = "<p>Hi</p><p>Please find the attachment</p>";
    // if(!$mail->send())
	// {
	// 	echo "error";
    // }
    // else
    // {
    //     echo "Mail Send Successfully";
    // }
?>