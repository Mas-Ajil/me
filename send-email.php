<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  $name = htmlspecialchars(trim($_POST['name']));
  $email = htmlspecialchars(trim($_POST['email']));
  $message = htmlspecialchars(trim($_POST['message']));

  
  $to = "azizilansarinaputra@gmail.com"; 
  $subject = "Contact Form Portfolio $name";

  
  $email_content = "Name: $name\n";
  $email_content .= "Email: $email\n\n";
  $email_content .= "Message:\n$message\n";

  
  $headers = "From: $email";

  
  if (mail($to, $subject, $email_content, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Failed to send message.";
  }
}
?>
