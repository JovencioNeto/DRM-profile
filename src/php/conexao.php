<?php

    // Inicio da sessão
    session_start();

    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'banco_usuarios';

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Não foi possível realizar a conexão com o banco de dados!". $conn->connect_error);
    }
?>