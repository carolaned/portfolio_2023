<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Confirmation | Carolane</title>

    <link rel="stylesheet" href="styles/main.css" />
    <script src="scripts/main.js" defer></script>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-1YNQXNCP0Z"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-1YNQXNCP0Z');
    </script>
  </head>
   <?php

    // Input du formulaire
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    // Message ou non
    if($message){
        $message;
    } else{
        $message = "Aucun";
    }


    // Infos du courriel
    $dest = 'carolanedupont@hotmail.com';
	$objet = "Message provenant de Portfolio";
    $contenu = '<html>
    <head>
    <title>HTML email</title>
    </head>
    <body>
    <h1>Message envoyé depuis mon portfolio</h1>
    <p><b>Nom : </b>' . $name . '<br>
        <b>Courriel : </b>' . $email . '<br>
        <b>Message : </b>' . $message . '</p>
        </body>
        </html>
        ';

    $from = "";

    // Convertir le html en texte
    $headers = "MIME-Version: 1.0" . "\r\n"; 
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 
 

    // Confirmation de l'envoie du formulaire
    $retour = mail($dest, $objet, $contenu, $headers);
    if ($retour){
        echo "<div class='form_confirmation'><h2>Votre formulaire a été envoyé.</h2><a class='bouton' href='contact.html'>Retour</a></div>";
    }