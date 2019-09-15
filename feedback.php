<?php

if($_POST["submit"]) {
    $recipient="nevinjojo98@gmail.com";
    $subject="Feedback: The Design Index";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you for your feedback! Your message has been sent.</p>";
}

?><!DOCTYPE html>

<html lang="en" xml:lang="en">
<head>
  <title>The Design Index</title>

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-145436140-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-145436140-1');
  </script>

  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="A hand-picked directory of the best design resources and tools.">
  <meta name="keywords" content="design, graphic design, resources, list, free, tools, tool, help, index, directory, best, new, Nikolai Bain, Nevin Jojo">
  <meta name="author" content="Nikolai Bain, Nevin Jojo">
  <meta property="og:title" content="The Design Index" />
  <meta property="og:image" content="images/preview.jpg" />

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" type="text/css">

  <!-- Custom Fonts, Stylesheets and Javascript -->
  <link rel='stylesheet' href='css/style.css'/>
  <script src="js/resources.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Muli:400,600,700,800&display=swap" rel="stylesheet">

  <!-- Favicon -->
  <link rel="apple-touch-icon" sizes="57x57" href="images/favicons/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="images/favicons/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="images/favicons/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="images/favicons/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="images/favicons/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="images/favicons/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="images/favicons/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="images/favicons/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="images/favicons/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="images/favicons/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="images/favicons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="images/favicons/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="images/favicons/favicon-16x16.png">
  <link rel="manifest" href="images/favicons/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">
</head>

<body>
<!-- Header -->
<nav class="navbar">
  <!-- Top Header -->
  <div class="container-fluid header brand-header">
    <a class="navbar-brand mb-0 h1" href="#"><img src="images/logo.svg" width="230" class="d-inline-block align-top" alt=""></a>
    <a class="navbar-text feedback" href="mailto:nikolai@icloud.com?subject=Feedback%20for%20The%20Design%20Index">Send feedback</a>
  </div>

  <!-- Bottom Header -->
  <div class="container-fluid header slogan-header">
    <h6 class="navbar-text slogan">A hand-picked directory of the best design resources and tools</h6>
    <span class="navbar-text last-updated">Last updated on Sept 2019</span>
  </div>
</nav>

<!-- Resource Wrapper -->
<div class="box">
  <div class="resource-wrapper">
    <?=$thankYou ?>

    <form method="post" action="contact.php">
      <label>Name:</label>
      <input name="sender">

      <label>Email address:</label>
      <input name="senderEmail">

      <label>Message:</label>
      <textarea rows="5" cols="20" name="message"></textarea>

      <input type="submit" name="submit">
    </form>
  </div>
</div>

<!-- Footer -->
<div class="navbar">
  <div class="container-fluid header">
    <a class="navbar-brand mb-0 h1" href="#"><img src="images/logo2.svg" width="30" height="30" class="d-inline-block align-top" alt="logo"/></a>
    <p class="copyright">Made with love by <a class="navbar-text copyright" href= "https://www.nikolaibain.com" style="color:#323E48;"><b>Nikolai Bain</b></a> & <a class="navbar-text copyright" href= "http://www.nevinjojo.com" style="color:#323E48;"><b>Nevin Jojo</b></a>
  </div>
</div>

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>


<html>
<head>
  <meta charset="utf-8">
  <title>Contact form to email</title>
</head>

<body>

</body>

</html>
