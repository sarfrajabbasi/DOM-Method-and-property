<?php
// Moves uploads file to a nice directory

$targetpath = 'Creating an AJAX File Upload Progress Bar in JavaScript  -->
/'  . basename($_FILES['inpFile']['name']);
move_uploaded_file($_FILES['inpFile']['tmp_name'].$targetpath);
?>
