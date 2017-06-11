<?php

if (!isset($_ENV['ADYEN_KEY'])) {
    echo '<h1>Please set ADYEN_KEY env variable</h1>';
    exit();
}
$key = $_ENV['ADYEN_KEY'];
