<?php
header('Content-Type: application/json; charset=utf-8');

$name    = htmlspecialchars(trim($_POST['name'] ?? ''));
$tel     = preg_replace('/[^0-9+\-\s]/', '', $_POST['tel'] ?? '');
$email   = htmlspecialchars(trim($_POST['email'] ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

if (empty($name) || empty($tel) || empty($message)) {
  http_response_code(400);
  echo json_encode(['success' => false, 'error' => 'Заполните обязательные поля']);
  exit;
}

$recipient = 'roza-tur31@rambler.ru';
$subject   = '=?UTF-8?B?' . base64_encode('Новая заявка с сайта') . '?=';

$body = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
</head>
<body style='margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, sans-serif;'>
  <table width='100%' cellpadding='0' cellspacing='0' style='background-color:#f4f4f4; padding: 40px 0;'>
    <tr>
      <td align='center'>
        <table width='600' cellpadding='0' cellspacing='0' style='background-color:#ffffff; border-radius:12px; overflow:hidden;'>

          <!-- Шапка -->
          <tr>
            <td style='background-color:#fe6f09; padding: 30px 40px; text-align:center;'>
              <h1 style='margin:0; color:#ffffff; font-size:24px; font-weight:700;'>Роза-тур</h1>
              <p style='margin:8px 0 0; color:#ffffff; font-size:14px; opacity:0.9;'>Новая заявка с сайта</p>
            </td>
          </tr>

          <!-- Тело -->
          <tr>
            <td style='padding: 40px;'>
              <table width='100%' cellpadding='0' cellspacing='0'>

                <tr>
                  <td style='padding-bottom: 20px; border-bottom: 1px solid #f0f0f0;'>
                    <p style='margin:0 0 4px; color:#999999; font-size:12px; text-transform:uppercase; letter-spacing:1px;'>Имя</p>
                    <p style='margin:0; color:#333333; font-size:16px; font-weight:600;'>{$name}</p>
                  </td>
                </tr>

                <tr>
                  <td style='padding: 20px 0; border-bottom: 1px solid #f0f0f0;'>
                    <p style='margin:0 0 4px; color:#999999; font-size:12px; text-transform:uppercase; letter-spacing:1px;'>Телефон</p>
                    <p style='margin:0; color:#333333; font-size:16px; font-weight:600;'>{$tel}</p>
                  </td>
                </tr>

                <tr>
                  <td style='padding: 20px 0; border-bottom: 1px solid #f0f0f0;'>
                    <p style='margin:0 0 4px; color:#999999; font-size:12px; text-transform:uppercase; letter-spacing:1px;'>Email</p>
                    <p style='margin:0; color:#333333; font-size:16px; font-weight:600;'>{$email}</p>
                  </td>
                </tr>

                <tr>
                  <td style='padding: 20px 0;'>
                    <p style='margin:0 0 4px; color:#999999; font-size:12px; text-transform:uppercase; letter-spacing:1px;'>Сообщение</p>
                    <p style='margin:0; color:#333333; font-size:16px; line-height:1.6;'>{$message}</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Подвал -->
          <tr>
            <td style='background-color:#f9f9f9; padding: 20px 40px; text-align:center; border-top: 1px solid #f0f0f0;'>
              <p style='margin:0; color:#999999; font-size:12px;'>Это письмо отправлено автоматически с сайта Роза-тур</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
";

$headers  = "From: noreply@roza-tour.ru\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

if (mail($recipient, $subject, $body, $headers)) {
  echo json_encode(['success' => true]);
} else {
  http_response_code(500);
  echo json_encode(['success' => false, 'error' => 'Ошибка отправки']);
}
