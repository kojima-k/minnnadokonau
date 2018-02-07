<?php

require('../vendor/autoload.php');

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>みんなどこなう？</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>
    <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true_or_false"></script>
    
</head>
<body>
    <p>あなたの現在位置 </p>
    <input type="text" class="name">
    <input type="button" class="name_send" value="名前確定 GPS開始！">
    <div id="show_result"></div>
    <div id="gmap" style="width : 500px; height : 500px;"></div> 
    <script src="main.js"></script>
</body>
</html>

