<?php 
		use PHPMailer\PHPMailer\PHPMailer;
		use PHPMailer\PHPMailer\Exception;

		require 'phpmailer/src/Exception.php';
		require 'phpmailer/src/PHPMailer.php';

		$mail = new PHPMailer(true);
		$mail->CharSet = 'UTF-8';
		$mail->setLanguage('ua', 'ru', 'phpmailer/language/');
		$mail->IsHTML(true);

		//Від кого лист
		$mail->setFrom('scaarboro@gmail.com', 'Yuri Chapiuk Portfolio');
		//Кому відправляти?
		$mail->addAddres('yurachapyuk@gmail.com');
		//Тема листа
		$mail->Subject = 'Від сайта портфоліо Yuri Chapiuk';

		//Текст листа
		$body = '<h1>Текст листа</h1>';

		if(trim(!empty($_POST['name']))){0
			$body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
		}
		if(trim(!empty($_POST['email']))){0
			$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
		}
		if(trim(!empty($_POST['message']))){0
			$body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
		}

		//Відправляємо
		if (!$mail->send()) {
			$message = 'Error';
		} else {
			$message = 'Email sent';
		}

		$response = ['message' => $message];

		header('Content-type: application/json');
		echo json_encode($response);
?>