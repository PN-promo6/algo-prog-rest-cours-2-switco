<?php
$users = file_get_contents('http://localhost:3000/users');
echo $users;