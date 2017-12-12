<h2>Andar Lin Web Design Info</h2>

<?

$name = $_POST['firstname'];
$name =  $_POST['lastname'];
$comments = $_POST['comments'];
$email = $_POST['email'];


$to = 'andar.lin7@gmail.com';
$subject = 'Andar Lin Web Design info';
$msg = $comments ;
mail($to, $subject, $msg, 'From:' . $email);


echo ' Your email has been sent. <br />';
echo 'Thanks for your inquiry get back to you as soon as possible <br> />';

echo 'comments: ' . $comments . '<br> />';
echo 'Your email address is: ' . $email;
echo $firstname;


?>
